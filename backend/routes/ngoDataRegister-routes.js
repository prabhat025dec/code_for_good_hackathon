const express = require("express");
const router = express.Router();
const ngoDataRegistrationController = require("../controllers/ngoDataRegistrationController");





router.post("/addNgoData", ngoDataRegistrationController.addNgoRegistration);
router.get("/getAllNgos", ngoDataRegistrationController.getAllNgosData);
router.get("/getNgoData/:id", ngoDataRegistrationController.getNgoData);
router.put('/updateNgoData/:id', ngoDataRegistrationController.updateNgoData);
router.delete('/deleteNgoData/:id', ngoDataRegistrationController.deleteNgoData);
module.exports = router;
