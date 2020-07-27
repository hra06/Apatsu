const express = require('express');
const superAdminUserController = require('../controllers/superAdminUser_controller');
const passport = require('passport');

const router = express.Router();

// router.post('/create',superAdminUserController.create);

// router.get('/profile',passport.checkAuthentication,superAdminUserController.profile);
// router.get('/superAdminicine',passport.checkAuthentication,serviceController.superAdminicine);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/login'}
) ,superAdminUserController.createSession);

router.get('/stores',passport.checkAuthentication,superAdminUserController.stores);


router.get('/sign-out',superAdminUserController.destroySession);



module.exports = router;