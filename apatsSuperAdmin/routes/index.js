const express = require('express');
const superAdminHomeController = require('./../controllers/superAdminHome_Controller');
const superAdminUserController = require('./../controllers/superAdminUser_controller')
const passport = require('passport');

const router = express.Router();

router.get('/',passport.checkAuthentication,superAdminHomeController.home)
// router.get('/team',superAdminHomeController.team);
router.get('/login',superAdminHomeController.login)
// router.get('/sign-up',superAdminHomeController.logup);
// router.get('/services',superAdminHomeController.services);

router.use('/superAdmin', require('./superAdminUsers'))
// router.use('/service', require('./services'))
module.exports = router;