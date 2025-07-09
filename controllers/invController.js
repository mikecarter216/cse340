const invModel = require("../models/inventory-model")
const utilities = require("../utilities")

async function buildByClassification(req, res, next) {
  try {
    const classification = req.params.classification
    const vehicles = await invModel.getVehiclesByClassification(classification)
    const nav = await utilities.getNav()
    res.render("inventory/classification", {
      title: classification.charAt(0).toUpperCase() + classification.slice(1),
      nav,
      vehicles
    })
  } catch (err) {
    next(err)
  }
}

async function buildDetailView(req, res, next) {
  try {
    const invId = req.params.invId
    const vehicle = await invModel.getVehicleById(invId)
    const nav = await utilities.getNav()
    res.render("inventory/detail", {
      title: `${vehicle.inv_make} ${vehicle.inv_model}`,
      nav,
      vehicle
    })
  } catch (err) {
    next(err)
  }
}

module.exports = { buildDetailView, buildByClassification }