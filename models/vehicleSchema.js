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
  classification_name: String
})

module.exports = mongoose.model("Vehicle", vehicleSchema)
