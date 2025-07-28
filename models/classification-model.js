const pool = require("../config/db")

async function getAllClassifications() {
  const sql = "SELECT * FROM classification ORDER BY classification_name"
  const result = await pool.query(sql)
  return result.rows
}

module.exports = {
  getAllClassifications
}
