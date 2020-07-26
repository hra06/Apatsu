const express = require('express');
const hosUserController = require('../controllers/hosUser_controller');
const passport = require('passport');

const router = express.Router();

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/login'}
) ,hosUserController.createSession);


// Destroy the current session
router.get('/sign-out',hosUserController.destroySession);

router.get('/bookings',passport.checkAuthentication,hosUserController.bookings);



module.exports = router;