const express = require('express');
const homeController = require('./../controllers/home_Controller')

const router = express.Router();

router.get('/',homeController.home)
router.get('/team',homeController.team);
router.get('/log-in',homeController.login)

// app.use('/users', require('./users'))

module.exports = router;