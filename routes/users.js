const express=require('express');
//we need to same steps as done for index.js in routers file
const router=express.Router();

//now i want to access controller using this route file
const usersController=require('../controllers/users_controller');
//now i want to map route to user controller ke usercontroller.profile wale action ko
router.get('/profile',usersController.profile);
//iski vajah se request jaegi controller ke pas aur action perform hoga aur fir vo views ko request karega for html webpage aur use render karega web browser p and we get result
router.get('/sign-up',usersController.signUp);

router.get('/sign-in',usersController.signIn);
router.post('/create',usersController.create);

router.post('/create-session',usersController.createSession);

 
//export this router file and then we can access it un main index file 
module.exports =router;
