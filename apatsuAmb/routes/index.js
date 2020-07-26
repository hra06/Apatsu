const express = require('express');
const ambHomeController = require('./../controllers/ambHome_Controller');
const ambUserController = require('./../controllers/ambUser_controller')
const passport = require('passport');

const router = express.Router();

router.get('/',passport.checkAuthentication,ambHomeController.home)
router.get('/login',ambHomeController.login)

router.use('/ambusers', require('./ambUsers'))
module.exports = router;