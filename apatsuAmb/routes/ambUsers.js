const express = require('express');
const ambUserController = require('../controllers/ambUser_controller');
const passport = require('passport');

const router = express.Router();

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/login'}
) ,ambUserController.createSession);



router.get('/sign-out',ambUserController.destroySession);


router.get('/ambulance',passport.checkAuthentication,ambUserController.ambulance);


module.exports = router;