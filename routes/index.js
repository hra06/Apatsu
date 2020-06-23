const express = require('express');
const homeController = require('./../controllers/home_Controller')

const router = express.Router();

router.get('/',homeController.home)
router.get('/team',homeController.team);

module.exports = router;