const express = require('express');
const hosUserController = require('../controllers/hosUser_controller');
const passport = require('passport');

const router = express.Router();

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/log-in'}
) ,hosUserController.createSession);


// Destroy the current session
router.get('/sign-out',hosUserController.destroySession);



module.exports = router;