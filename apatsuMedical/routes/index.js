const express = require('express');
const medHomeController = require('./../controllers/medHome_Controller');
const medUserController = require('./../controllers/medUser_controller')
const passport = require('passport');

const router = express.Router();

router.get('/',medHomeController.home)
// router.get('/team',medHomeController.team);
// router.get('/log-in',medHomeController.login)
// router.get('/sign-up',medHomeController.logup);
// router.get('/services',medHomeController.services);

router.use('/medusers', require('./medUsers'))
// router.use('/service', require('./services'))
module.exports = router;