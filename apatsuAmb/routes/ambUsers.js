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

// Open the Particular Page
router.get('/order/:id',passport.checkAuthentication,ambUserController.order)

// Accept BOoking
router.post('/accept/:id',passport.checkAuthentication,ambUserController.accept)

// current Booking currentBooking
router.get('/currentBooking',passport.checkAuthentication,ambUserController.currentBooking)

// previousBookings
router.get('/previousBookings',passport.checkAuthentication,ambUserController.previousBookings)

module.exports = router;