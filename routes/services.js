const express = require('express');
const userController = require('./../controllers/user_controller')
const serviceController = require('./../controllers/service_controller')
const passport = require('passport');

const router = express.Router();

// Form Rouest
router.get('/medicine',passport.checkAuthentication,serviceController.medicine);
// router.get('/checkup',passport.checkAuthentication,serviceController.checkup);
router.get('/hospital/:id',passport.checkAuthentication,serviceController.hospital);
router.get('/ambulance',passport.checkAuthentication,serviceController.ambulance);

// form DataBase
router.post('/medicineOrder',passport.checkAuthentication,serviceController.medicineOrder);
router.post('/ambulanceCall',passport.checkAuthentication,serviceController.ambulanceCall);
router.post('/bookBed',passport.checkAuthentication,serviceController.bookBed);

// List pages of ambulances , hospitals , stores
router.get('/medicalStores',passport.checkAuthentication,serviceController.medicalStores);
router.get('/ambulanceList',passport.checkAuthentication,serviceController.ambulanceList);
router.get('/hospitals',passport.checkAuthentication,serviceController.hospitals);

// Search with Pincode
router.post('/medicalPincode',passport.checkAuthentication,serviceController.medicalPincode);
router.post('/ambulanceListPincode',passport.checkAuthentication,serviceController.ambulanceListPincode);
router.post('/hospitalsPincode',passport.checkAuthentication,serviceController.hospitalsPincode);

// Open Particular Store
router.get('/viewMedStore/:id',passport.checkAuthentication,serviceController.viewMedStore);
router.get('/viewHospital/:id',passport.checkAuthentication,serviceController.viewHospital);
router.get('/viewAmbulance/:id',passport.checkAuthentication,serviceController.viewAmbulance);

// form Fill pincode 
router.post('/formAmbulance',passport.checkAuthentication,serviceController.formAmbulance);
router.post('/formMedicine',passport.checkAuthentication,serviceController.formMedicine);

module.exports = router;