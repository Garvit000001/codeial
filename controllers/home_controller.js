const { response } = require("express");

 //collection of kis route p kya  actions karna hai ie app.get app.post ke is known as controller
//  it is an object so we have to give it some name ie home 
 module.exports.home =function(request,response){
    return response.end('<h1>Express is  up for codeial</h1>');
 }
 //it is similar to app.get kebadd jo likhte the 