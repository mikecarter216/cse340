const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({
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

module.exports = mongoose.model("Inventory", inventorySchema)