//why do we keep const as we dont want variables to be override by anyone esle in code
const express=require('express');
const cookieParser=require('cookie-parser');
const { urlencoded } = require('express');
const db=require('./config/mongoose');
const app=express();
const port=8000;

//reading through the post request
app.use(express.urlencoded());

app.use(cookieParser());
//use express router
app.use('/',require('./routes'));

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(error){
    if(error){
        // console.log('error :',error);
        //same above thing can bw written by using interpolator ie -->  ``
        console.log(`error in running the server : ${error}`);
    }
    console.log(`Server is running on port : ${port}`);

});