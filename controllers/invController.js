const invModel = require("../models/inventory-model")
const utilities = require("../utilities/index")

async function buildByClassification(req, res, next) {
  try {
    const classification = req.params.classification
    const data = await invModel.getVehiclesByClassification(classification)
    const nav = await utilities.getNav()
    res.render("inventory", {
      title: classification.toUpperCase(),
      nav,
      vehicles: data
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  buildByClassification
}

module.exports = { buildByClassification }