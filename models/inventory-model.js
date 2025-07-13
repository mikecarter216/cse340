const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({
  inv_make: String,
  inv_model: String,
  inv_year: Number,
  inv_price: Number,
  inv_miles: Number,
  inv_color: String,
  inv_description: String,
  inv_image: String,
  classification: String
})

const Vehicle = mongoose.model("Vehicle", vehicleSchema)

async function getVehicleById(inv_id) {
  return await Vehicle.findById(inv_id)
}

async function getVehiclesByClassification(classification) {
  return await Vehicle.find({ classification })
}

module.exports = { getVehicleById, getVehiclesByClassification }