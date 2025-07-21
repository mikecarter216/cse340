const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");
const checkAuth = require("../middleware/checkAuth");
const multer = require("multer");

// File storage for avatar uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1E9) + "." + ext;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Login
router.get("/login", accountController.buildLogin);
router.post("/login", accountController.handleLogin);

// Register
router.get("/register", accountController.buildRegister);
router.post("/register", accountController.handleRegister);

// Management
router.get("/", checkAuth, accountController.buildAccountManagement);

// Update Account
router.get("/update", checkAuth, accountController.buildUpdateAccount);
router.post("/update", checkAuth, upload.single("avatar"), accountController.handleUpdateAccount);

// Change Password
router.get("/change-password", checkAuth, accountController.buildChangePassword);
router.post("/change-password", checkAuth, accountController.handleChangePassword);

// Logout
router.get("/logout", accountController.handleLogout);

module.exports = router;
