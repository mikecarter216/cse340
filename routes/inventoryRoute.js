const express = require("express")
const router = express.Router()
const invController = require("../controllers/invController")

router.get("/type/:classification", invController.buildByClassification)
router.get("/detail/:invId", invController.buildDetailView)
module.exports = router