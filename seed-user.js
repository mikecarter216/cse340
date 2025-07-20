const bcrypt = require("bcryptjs")
const pool = require("./config/db")

async function seedUser() {
  try {
    const email = "michaelakpan216@gmail.com"
    const password = "mike1"
    const firstname = "Michael"
    const lastname = "Akpan"
    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await pool.query(
      `INSERT INTO account (email, password, firstname, lastname)
       VALUES ($1, $2, $3, $4)
       RETURNING account_id`,
      [email, hashedPassword, firstname, lastname]
    )

    console.log("✅ User inserted with ID:", result.rows[0].account_id)
    process.exit()
  } catch (err) {
    console.error("❌ Error inserting user:", err)
    process.exit(1)
  }
}

seedUser()
