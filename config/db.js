const { Pool } = require("pg")
require("dotenv").config()

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
})

// Function to test and confirm connection
async function connectDB() {
  try {
    await pool.connect()
    console.log("✅ Connected to PostgreSQL")
  } catch (err) {
    console.error("❌ PostgreSQL connection error:", err)
    process.exit(1)
  }
}

module.exports = {
  connectDB,
  pool,
}
