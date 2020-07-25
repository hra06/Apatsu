const express = require('express');
const joinController = require('../controllers/join_controller')
// const serviceController = require('./../controllers/service_controller')
const passport = require('passport');

const router = express.Router();


router.get('/medReg',joinController.medReg);
router.post('/createMed',joinController.createMed);
// router.get('/ambReg',passport.checkAuthentication,joinController.ambReg);
// router.get('/hosReg',passport.checkAuthentication,joinController.hosReg);
// 



module.exports = router;