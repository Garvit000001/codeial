const User=require('../models/users');
const { response } = require("express");


module.exports.profile=function(request,response){
    if(request.cookies.user_id){
        User.findById(request.cookies.user_id,function(error,user){
            if(user){
                return response.render('user_profile',{
                    title : "User Profile",
                    user: user
                });
            }
            return response.redirect('/users/sign-in');
        });
    }
    else{
        return response.redirect('/users/sign-in');

    }

}
//now this controller/action is ready to be accessed by router so i need to create a route
// and that router is to be accessed by the broweser 

//render the sign up page
module.exports.signUp=function(request,response){

    return response.render('user_sign_up',{
        title:'Codeial | Sign up' 
    });
    
}
//render the sign in page
//now we will add routes as request toh vhin se aegi action perform krne ke liye so modify it also 
module.exports.signIn=function(request,response){
    return response.render('user_sign_in',{
        title:'Codeial | Sign in'
    });
}
//get the sign up data
module.exports.create=function(request,response){
    //we will compare if password ==confirm password
    if(request.body.password != request.body.confirm_password){
        return response.redirect('back');
    }
    //if equals then we will see email id is unique or not in db if not then reject it
    User.findOne({email: request.body.email},function(error,user){
        if(error){console.log('error in finding user in signing up');return}
        //when user is not found we will create one
        if(!user){
            User.create(request.body,function(error,user){
                if(error){
                    console.log('error in creating user while signing up');return}
                return response.redirect('/users/sign-in');
            })
        }
                //or user is already existing then redirect to previous page
        else{
            console.log('error');
                    return response.redirect('back');
            }

           
        });
  
};
//sign in and create session for the user
module.exports.createSession = function(request,response){
    //Steps to authenticate
    //find the user
    User.findOne({email : request.body.email},function(error,user){
        if(error){console.log('error in finding user in signing in');return}
    //handle user found 
    if(user){
        //handle password which doesn't match
        if(user.password != request.body.password){
            return response.redirect('back');
        }
        //handle session creation ie if passwoed matches we send cookie to the  db
        response.cookie('user_id',user.id);
        // ie cookie ke jariye jo user_id aayi hai wahi user ki id hai aur cookie je jariye hamne store karli id user ki now we will use it for authentication fo next time he checks in
        return response.redirect('/users/profile');
    }
    else{
    //handle user not found
    return response.redirect('back'); 
    }
    });

};