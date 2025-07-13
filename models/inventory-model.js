const mongoose = require("mongoose")
require("dotenv").config()

// Define vehicle schema
const vehicleSchema = new mongoose.Schema({
  inv_id: Number,
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

// Create the model
const Vehicle = mongoose.model("Vehicle", vehicleSchema)

// Seed data
const seedData = [
  {
    inv_id: 1,
    inv_make: "Lamborghini",
    inv_model: "Lamborghini Countach",
    inv_year: 1981,
    inv_price: 45000,
    inv_miles: 42000,
    inv_color: "brushed green",
    inv_description: "A futuristic classic car.",
    inv_image: "/images/lamborghini.png",
    classification: "custom"
  },
  {
    inv_id: 2,
    inv_make: "Toyota",
    inv_model: "Highlander",
    inv_year: 2022,
    inv_price: 38000,
    inv_miles: 15000,
    inv_color: "Black",
    inv_description: "Spacious and reliable SUV.",
    inv_image: "/images/suv1.png",
    classification: "suv"
  },
  {
    inv_id: 3,
    inv_make: "Ford",
    inv_model: "Explorer",
    inv_year: 2019,
    inv_price: 21000,
    inv_miles: 20000,
    inv_color: "Blue",
    inv_description: "Durable and powerful car.",
    inv_image: "/images/ford1.png",
    classification: "suv"
  },
  {
    inv_id: 4,
    inv_make: "Honda",
    inv_model: "Accord",
    inv_year: 2021,
    inv_price: 27000,
    inv_miles: 23000,
    inv_color: "White",
    inv_description: "Comfortable and efficient sedan.",
    inv_image: "/images/sedan1.png",
    classification: "sedan"
  },
  {
    inv_id: 5,
    inv_make: "Ford",
    inv_model: "F-150",
    inv_year: 2020,
    inv_price: 41000,
    inv_miles: 30000,
    inv_color: "Blue",
    inv_description: "Durable and powerful truck.",
    inv_image: "/images/truck1.png",
    classification: "truck"
  },
  {
    inv_id: 6,
    inv_make: "Mark",
    inv_model: "R-23-X",
    inv_year: 2021,
    inv_price: 45000,
    inv_miles: 20000,
    inv_color: "Red",
    inv_description: "Durable and powerful truck.",
    inv_image: "/images/truck3.png",
    classification: "truck"
  },
  {
    inv_id: 7,
    inv_make: "Tesla",
    inv_model: "Current",
    inv_year: 2024,
    inv_price: 250000,
    inv_miles: 25000,
    inv_color: "ash grey",
    inv_description: "Durable and powerful Truck.",
    inv_image: "/images/tesla1.png",
    classification: "sedan"
  },
  {
    inv_id: 8,
    inv_make: "Tesla",
    inv_model: "G50",
    inv_year: 2022,
    inv_price: 50000,
    inv_miles: 20000,
    inv_color: "Deep Blue",
    inv_description: "Durable and powerful Car.",
    inv_image: "/images/tesla2.png",
    classification: "sedan"
  },
  {
    inv_id: 9,
    inv_make: "Tesla",
    inv_model: "Mustang",
    inv_year: 2023,
    inv_price: 25000,
    inv_miles: 10000,
    inv_color: "White",
    inv_description: "Durable and powerful Car.",
    inv_image: "/images/tesla3.png",
    classification: "suv"
  },
  {
    inv_id: 10,
    inv_make: "Ford",
    inv_model: "C-120",
    inv_year: 2022,
    inv_price: 42000,
    inv_miles: 30020,
    inv_color: "light green",
    inv_description: "Durable and powerful truck.",
    inv_image: "/images/truck2.png",
    classification: "truck"
  },
  {
    inv_id: 11,
    inv_make: "G-Wagon",
    inv_model: "G-Class",
    inv_year: 2019,
    inv_price: 33000,
    inv_miles: 28000,
    inv_color: "white",
    inv_description: "Sporty performance car.",
    inv_image: "/images/benz2.png",
    classification: "custom"
  },
  {
    inv_id: 12,
    inv_make: "Toyota",
    inv_model: "Model S",
    inv_year: 2023,
    inv_price: 90000,
    inv_miles: 5000,
    inv_color: "white",
    inv_description: "Electric Toyota camry.",
    inv_image: "/images/camry3.png",
    classification: "custom"
  },
  {
    inv_id: 13,
    inv_make: "Nissan",
    inv_model: "370Z",
    inv_year: 2020,
    inv_price: 32000,
    inv_miles: 18000,
    inv_color: "deep blue",
    inv_description: "Compact performance coupe.",
    inv_image: "/images/camry2.png",
    classification: "custom"
  },
  {
    inv_id: 14,
    inv_make: "Mercedes-Benz",
    inv_model: "C 500",
    inv_year: 2022,
    inv_price: 95000,
    inv_miles: 7000,
    inv_color: "White",
    inv_description: "Luxury performance coupe.",
    inv_image: "/images/benz1.png",
    classification: "custom"
  },
  {
    inv_id: 15,
    inv_make: "BMW",
    inv_model: "911",
    inv_year: 2023,
    inv_price: 115000,
    inv_miles: 3000,
    inv_color: "light blue",
    inv_description: "High-end sports car.",
    inv_image: "/images/bmw1.png",
    classification: "sport"
  },
  {
    inv_id: 16,
    inv_make: "Ferrari",
    inv_model: "Roma",
    inv_year: 2023,
    inv_price: 220000,
    inv_miles: 1200,
    inv_color: "Red",
    inv_description: "Exotic performance machine.",
    inv_image: "/images/ferrari1.png",
    classification: "sport"
  }
]

// Connect and seed
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log("✅ Connected to MongoDB")
  await Vehicle.deleteMany({})
  await Vehicle.insertMany(seedData)
  console.log("✅ Vehicle data seeded successfully!")
  process.exit()
})
.catch((err) => {
  console.error("❌ Seeding failed:", err)
  process.exit(1)
})