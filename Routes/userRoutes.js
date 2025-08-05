const express = require('express');
const router = express.Router();
const authMiddleware = require('./authMiddleware');

const userController = require('../Controllers/userController');

router.post("/api/registerUser", userController.registerUser);
router.post("/api/loginUser", userController.loginUser);
router.get("/api/listUsers", authMiddleware, userController.listUsers);

module.exports = router;