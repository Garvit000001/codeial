const express = require('express');  
//express will use already created express instance and not use spaces faltu m and it makes it so fast 


const router=express.Router();

const homeController=require('../controllers/home_controller')
console.log('router loaded');

//home controller has home controller.home which we want to access in routes now ie ab vo kya karega jab / hoga in url this is the simplest thing 
router.get('/',homeController.home);

//ek bar iss file ko export kar chuke in main index file so now jo users wali usko wasise toh kar hi skte hain but i can link that in this file also as ye file toh check hogi hi
router.use('/users',require('./users'));
//now whenever/users/profile will come in url then userscontroller.profile will work

//SYNTAX for any further routes access from here
//router.use('/routerName',require('./routerfile'));

module.exports=router;
//i want to export to available to index.js of codeial file
//and now we want to app to use it ie app.get for eg in inex.js of codeial