const pool = require("../config/db") // or wherever your DB connection is

/**
 * Get all vehicle classifications
 */
async function getAllClassifications() {
  const sql = "SELECT * FROM classification ORDER BY classification_name"
  const result = await pool.query(sql)
  return result.rows
}

module.exports = {
  getAllClassifications
}
