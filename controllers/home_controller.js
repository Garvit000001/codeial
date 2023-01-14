const { response } = require("express");

 //collection of kis route p kya  actions karna hai ie app.get app.post ke is known as controller
//  it is an object so we have to give it some name ie home 
module.exports.home=function(request,response){
   return response.render('home',{
       title:"Home"
   })};
 //it is similar to app.get kebadd jo likhte the 

 //module.exports.actionname=function(request,response){};