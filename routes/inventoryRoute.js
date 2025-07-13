const express = require("express")
const router = express.Router()
const invController = require("../controllers/invController")

// Route to get vehicles by classification
router.get("/type/:classification", invController.buildByClassification)

module.exports = router