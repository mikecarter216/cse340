const { getNav } = require("./index")

module.exports = async function (err, req, res, next) {
  console.error("🔥 Error Handler Middleware:", err.stack)
  const nav = await getNav()

  res.status(500).render("errors/error", {
    title: "Server Error",
    message: err.message,
    nav
  })
}