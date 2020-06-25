const express = require('express');
const userController = require('./../controllers/user_controller')
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



module.exports = router;