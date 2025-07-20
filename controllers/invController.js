const invModel = require("../models/inventory-model")
const classificationModel = require("../models/classification-model")
const utilities = require("../utilities")

async function buildInventory(req, res, next) {
  try {
    const nav = await utilities.getNav()
    res.render("inventory/index", {
      title: "Inventory Management",
      nav
    })
  } catch (error) {
    next(error)
  }
}

async function buildByClassification(req, res, next) {
  try {
    const classification = req.params.classification.toLowerCase()
    const vehicles = await invModel.getVehiclesByClassification(classification)
    const nav = await utilities.getNav()

    res.render("inventory/classification", {
      title: `${classification.charAt(0).toUpperCase() + classification.slice(1)} Vehicles`,
      nav,
      vehicles
    })
  } catch (error) {
    next(error)
  }
}

async function buildById(req, res, next) {
  try {
    const inv_id = req.params.inv_id
    const vehicle = await invModel.getVehicleById(inv_id)
    const nav = await utilities.getNav()

    if (!vehicle) {
      return res.status(404).render("errors/404", { title: "Not Found", nav })
    }

    res.render("inventory/detail", {
      title: `${vehicle.inv_year} ${vehicle.inv_make} ${vehicle.inv_model}`,
      nav,
      vehicle
    })
  } catch (error) {
    next(error)
  }
}

// ✅ New function to build the Add Inventory form
async function buildAddInventory(req, res, next) {
  try {
    const nav = await utilities.getNav()
    const classificationList = await classificationModel.getAllClassifications()

    res.render("inventory/add-inventory", {
      title: "Add New Inventory",
      nav,
      classificationList,
      message: null
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  buildInventory,
  buildByClassification,
  buildById,
  buildAddInventory, // ✅ Export the new function
}
