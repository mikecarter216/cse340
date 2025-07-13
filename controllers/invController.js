const invModel = require("../models/inventory-model");
const utilities = require("../utilities");

async function buildByClassification(req, res, next) {
  try {
    const classification = req.params.classification.toLowerCase();
    const vehicles = await invModel.getVehiclesByClassification(classification);
    const nav = await utilities.getNav();

    res.render("inventory/classification", {
      title: `${classification.charAt(0).toUpperCase() + classification.slice(1)} Vehicles`,
      nav,
      vehicles
    });
  } catch (error) {
    next(error);
  }
}

async function buildById(req, res, next) {
  try {
    const inv_id = req.params.inv_id;
    const vehicle = await invModel.getVehicleById(inv_id);
    const nav = await utilities.getNav();

    if (!vehicle) {
      return res.status(404).render("errors/404", { title: "Not Found", nav });
    }

    res.render("inventory/detail", {
      title: `${vehicle.inv_year} ${vehicle.inv_make} ${vehicle.inv_model}`,
      nav,
      vehicle
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  buildByClassification,
  buildById
};
