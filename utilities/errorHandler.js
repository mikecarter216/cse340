function handleErrors(err, req, res, next) {
  console.error(err.stack)
  res.status(500).render("errors/error", {
    title: "Server Error",
    message: err.message,
    nav: "<nav><a href='/'>Home</a></nav>"
  })
}
module.exports = handleErrors