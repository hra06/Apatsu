const express = require('express');
const medUserController = require('../controllers/medUser_controller')
// const serviceController = require('./../controllers/service_controller')
const passport = require('passport');

const router = express.Router();

router.post('/create',medUserController.create);

router.get('/profile',passport.checkAuthentication,medUserController.profile);
// router.get('/medicine',passport.checkAuthentication,serviceController.medicine);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/log-in'}
) ,medUserController.createSession);

router.get('/sign-out',medUserController.destroySession);



module.exports = router;