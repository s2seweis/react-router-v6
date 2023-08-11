const express = require("express")
const router = express.Router();
const User = require("../models/userModel")

const {
    currentUser,
    login,
    register,
    getallusers,
    deleteuser,
    adduser,
    edituser,
    resetPasswordRequestController,
    resetPasswordController
} = require("../controllers/userController");

const validateToken = require("../middleware/validateTokenHandler");

// ### - import the logic from the controller
router.post("/login", login);
// ###

// ### - import the logic from controller
router.get("/current", validateToken, currentUser);
// ###

// ###
router.post("/register", register);
// ###

// ###
router.get("/getallusers", getallusers);
// ###

// ###
router.post("/deleteuser", deleteuser);
// ###

// ###
router.post("/adduser", adduser);
// ###

// ###
router.post("/edituser", edituser);
// ###

// # Add Reset Passwort

// ###
router.post("/requestResetPassword", resetPasswordRequestController);
// ###

// ###
router.post("/resetPassword", resetPasswordController);
// ###



module.exports = router;

