const express = require("express")
const router = express.Router()
const invController = require("../controllers/invController")
const checkAuth = require("../middleware/checkAuth") // JWT login check
const checkRole = require("../middleware/checkRole") // Role-based access check

// Protect all /inv routes
router.use(checkAuth)

// Public routes (available to all logged-in users)
router.get("/type/:classification", invController.buildByClassification)
router.get("/detail/:inv_id", invController.buildById)

// Protected management route (for Employee or Admin only)
router.get("/", checkRole(["Employee", "Admin"]), invController.buildInventory)

module.exports = router
