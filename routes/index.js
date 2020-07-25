const express = require('express');
const homeController = require('./../controllers/home_Controller');
const userController = require('./../controllers/user_controller')
const passport = require('passport');

const router = express.Router();

router.get('/',homeController.home)
router.get('/team',homeController.team);
router.get('/log-in',homeController.login)
router.get('/sign-up',homeController.logup);
router.get('/services',homeController.services);

router.use('/users', require('./users'))
router.use('/service', require('./services'))
router.use('/join', require('./join'))
module.exports = router;