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

// Open the booking page
router.get('/bookings',passport.checkAuthentication,hosUserController.bookings);

// Open the confirmedBookings page
router.get('/confirmedBookings',passport.checkAuthentication,hosUserController.confirmedBookings);

// Open the previousBookings page
router.get('/previousBookings',passport.checkAuthentication,hosUserController.previousBookings);

// Open the Particular Page
router.get('/order/:id',passport.checkAuthentication,hosUserController.order)

// Accept Order
router.post('/accept/:id',passport.checkAuthentication,hosUserController.accept)


module.exports = router;