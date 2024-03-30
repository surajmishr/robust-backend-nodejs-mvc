const express = require('express');
const router = express.Router();

// Require the user controller
const userController = require("../controller/userController");

// Define routes
router.get('/add-user', userController.addUser); // Use userController.addUser

module.exports = router;
