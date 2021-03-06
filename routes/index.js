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
router.get('/joinUs',homeController.joinUs);
router.get('/404',homeController.fof);

router.use('/users', require('./users'))
router.use('/service', require('./services'))
router.use('/join', require('./join'))


// Super Admin Temp
// router.post('/sa',homeController.sa);

module.exports = router;