const express = require("express")
const router = express.Router()
const invController = require("../controllers/invController")
const checkAuth = require("../middleware/checkAuth")
const checkRole = require("../middleware/checkRole")

router.use(checkAuth)

router.get("/type/:classification", invController.buildByClassification)
router.get("/detail/:inv_id", invController.buildById)

router.get("/", checkRole(["Employee", "Admin"]), invController.buildInventory)

module.exports = router
