const express = require("express")
const router = express.Router()
const invController = require("../controllers/invController")

// Route to handle classification pages (e.g., /inv/type/suv)
router.get("/type/:classification", invController.buildByClassification)

module.exports = router