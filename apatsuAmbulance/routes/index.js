const express = require('express');
const hosHomeController = require('./../controllers/hosHome_Controller');
const hosUserController = require('./../controllers/hosUser_controller')
const passport = require('passport');

const router = express.Router();

router.get('/',passport.checkAuthentication,hosHomeController.home)
router.get('/login',hosHomeController.login)

router.use('/hosusers', require('./hosUsers'))
module.exports = router;