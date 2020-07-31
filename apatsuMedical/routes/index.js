const express = require('express');
const medHomeController = require('./../controllers/medHome_Controller');
const medUserController = require('./../controllers/medUser_controller')
const passport = require('passport');

const router = express.Router();

router.get('/',passport.checkAuthentication,medHomeController.home)
// router.get('/team',medHomeController.team);
router.get('/login',medHomeController.login);
router.get('/404',medHomeController.fof);
// router.get('/sign-up',medHomeController.logup);
// router.get('/services',medHomeController.services);

router.use('/medusers', require('./medUsers'))
// router.use('/service', require('./services'))
module.exports = router;