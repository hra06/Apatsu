const express = require('express');
const superAdminHomeController = require('./../controllers/superAdminHome_Controller');
const superAdminUserController = require('./../controllers/superAdminUser_controller')
const passport = require('passport');

const router = express.Router();

router.get('/',passport.checkAuthentication,superAdminHomeController.home)
router.get('/login',superAdminHomeController.login);

router.use('/superAdmin', require('./superAdminUsers'))
module.exports = router;