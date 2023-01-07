//why do we keep const as we dont want variables to be override by anyone esle in code
const express=require('express');
const app=express();
const port=8000;

app.listen(port,function(error){
    if(error){
        // console.log('error :',error);
        //same above thing can bw written by using interpolator ie -->  ``
        console.log(`error in running the server : ${error}`);
    }
    console.log(`Server is running on port : ${port}`);

})