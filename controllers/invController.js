const invModel = require("../models/inventory-model")
const utilities = require("../utilities/index")

async function buildByClassification(req, res, next) {
  try {
    const classification = req.params.classification
    const vehicles = await invModel.getVehiclesByClassification(classification)
    const nav = await utilities.getNav()

    res.render("inventory/classification", {
      title: `${classification.toUpperCase()} Vehicles`,
      nav,
      vehicles
    })
  } catch (err) {
    next(err)
  }
}

module.exports = { buildByClassification }