const express = require('express');
const userController = require('./../controllers/user_controller')
const serviceController = require('./../controllers/service_controller')
const passport = require('passport');

const router = express.Router();


router.get('/medicine',passport.checkAuthentication,serviceController.medicine);
router.get('/checkup',passport.checkAuthentication,serviceController.checkup);
router.get('/hospital',passport.checkAuthentication,serviceController.hospital);
router.get('/ambulance',passport.checkAuthentication,serviceController.ambulance);
// router.get('/medicine',passport.checkAuthentication,serviceController.medicine);




module.exports = router;