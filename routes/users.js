const express = require('express');
const userController = require('./../controllers/user_controller')
const serviceController = require('./../controllers/service_controller')
const passport = require('passport');

const router = express.Router();

router.post('/create',userController.create);

router.get('/profile',passport.checkAuthentication,userController.profile);


// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/log-in'}
) ,userController.createSession);

router.get('/sign-out',userController.destroySession);

// Order at Id
router.get('/ambulance/:id',passport.checkAuthentication,userController.ambulance);
router.get('/hospital/:id',passport.checkAuthentication,userController.hospital);
router.get('/medicine/:id',passport.checkAuthentication,userController.medicine);

// Status Update
router.get('/statusH/:id',passport.checkAuthentication,userController.statusH);
router.get('/statusA/:id',passport.checkAuthentication,userController.statusA);
router.get('/statusM/:id',passport.checkAuthentication,userController.statusM);


module.exports = router;