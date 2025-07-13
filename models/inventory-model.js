const Vehicle = require("./vehicleSchema") // or wherever your mongoose model is

async function getVehiclesByClassification(classification) {
  return await Vehicle.find({ classification })
}

module.exports = {
  getVehiclesByClassification
}