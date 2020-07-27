const express = require('express');
const superAdminUserController = require('../controllers/superAdminUser_controller');
const passport = require('passport');
const router = express.Router();

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/login'}
) ,superAdminUserController.createSession);

router.get('/sign-out',superAdminUserController.destroySession);


// Store Request
router.get('/stores',passport.checkAuthentication,superAdminUserController.stores);
router.get('/cancelStores',passport.checkAuthentication,superAdminUserController.cancelStores);


// Ambulance Request
router.get('/ambulances',passport.checkAuthentication,superAdminUserController.ambulances);
router.get('/cancelAmbulances',passport.checkAuthentication,superAdminUserController.cancelAmbulances);


// Hospital Request
router.get('/hospitals',passport.checkAuthentication,superAdminUserController.hospitals);
router.get('/cancelHospitals',passport.checkAuthentication,superAdminUserController.cancelHospitals);


module.exports = router;