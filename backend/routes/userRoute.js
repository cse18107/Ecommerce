const express = require('express');
const router= express.Router();
const {isAuthenticatedUser} = require("../middleware/auth");
const userController = require('../controllers/userController');
router.route('/register').post(userController.registerUser);
router.route('/login').post(userController.loginUser);
router.route("/password/forgot").post(userController.forgotPassword);
router.route("/password/reset/:token").put(userController.resetPassword)
router.route('/logout').get(userController.logout);
router.route("/me").get(isAuthenticatedUser,userController.getUserDetails)
module.exports = router;
