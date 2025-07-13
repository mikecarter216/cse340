module.exports = async (err, req, res, next) => {
  console.error("🔥 Error Handler Middleware:", err)

  const utilities = require("./index")
  const nav = await utilities.getNav()

  res.status(500).render("errors/500", {
    title: "Server Error",
    message: err.message,
    nav
  })
}