const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/userLogin");

router.post("/:type/login", UsersController.login);

module.exports = router;
