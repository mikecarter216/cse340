const inventory = [
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
    inv_id: 4,
    inv_make: "cybertruck",
    inv_model: "G300",
    inv_year: 2025,
    inv_price: 4000,
    inv_miles: 3000,
    inv_color: "milk white",
    inv_description: "Smart Car.",
    inv_image: "/images/tesla1.png",
    classification: "suv"
  },
      {
    inv_id: 4,
    inv_make: "Toyota",
    inv_model: "300",
    inv_year: 2023,
    inv_price: 4000,
    inv_miles: 3000,
    inv_color: "black",
    inv_description: "Durable car.",
    inv_image: "/images/camry1.png",
    classification: "sedan"
  },
  {
    inv_id: 3,
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
    inv_id: 4,
    inv_make: "Toyota",
    inv_model: "G30",
    inv_year: 2023,
    inv_price: 4000,
    inv_miles: 2000,
    inv_color: "deep blue",
    inv_description: "Comfortable and cool.",
    inv_image: "/images/camry2.png",
    classification: "sedan"
  },
  {
    inv_id: 4,
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
    inv_id: 4,
    inv_make: "truck",
    inv_model: "G300",
    inv_year: 2023,
    inv_price: 4000,
    inv_miles: 3000,
    inv_color: "white",
    inv_description: "Durable and powerful truck.",
    inv_image: "/images/truck2.png",
    classification: "truck"
  },
      {
    inv_id: 4,
    inv_make: "Mark",
    inv_model: "G3",
    inv_year: 2023,
    inv_price: 5000,
    inv_miles: 25000,
    inv_color: "red",
    inv_description: "Durable and powerful truck.",
    inv_image: "/images/truck3.png",
    classification: "truck"
  },
  // Custom cars (up to 5 total)
  {
    inv_id: 5,
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
    inv_id: 6,
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
    inv_id: 7,
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
    inv_id: 8,
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
  // Sport cars (2 total)
  {
    inv_id: 9,
    inv_make: "bmw",
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
    inv_id: 10,
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

async function getVehicleById(inv_id) {
  return inventory.find(v => v.inv_id == inv_id)
}

async function getVehiclesByClassification(classification) {
  let results = inventory.filter(v => v.classification === classification)
  
  // Limit based on classification
  if (classification === "custom") return results.slice(0, 5)
  if (classification === "sport") return results.slice(0, 2)

  return results
}

module.exports = { getVehicleById, getVehiclesByClassification }