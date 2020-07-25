const express = require('express');
const homeController = require('./../controllers/medHome_Controller');
const medUserController = require('./../controllers/medUser_controller')
const passport = require('passport');

const router = express.Router();

router.get('/',homeController.home)
router.get('/team',homeController.team);
router.get('/log-in',homeController.login)
router.get('/sign-up',homeController.logup);
router.get('/services',homeController.services);

router.use('/medusers', require('./medUsers'))
// router.use('/service', require('./services'))
module.exports = router;