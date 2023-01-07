const express = require('express');  
//express will use already created express instance and not use spaces faltu m and it makes it so fast 


const router=express.Router();
console.log('router loaded');



module.exports=router;
//i want to export to available to index.js of codeial file
//and now we want to app to use it ie app.get for eg in inex.js of codeial