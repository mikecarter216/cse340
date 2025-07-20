const pool = require("../config/db");

async function getAccountByEmail(email) {
  const result = await pool.query(
    "SELECT * FROM account WHERE email = $1",
    [email]
  );
  return result.rows[0];
}

module.exports = {
  getAccountByEmail
};
