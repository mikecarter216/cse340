function handleErrors(err, req, res, next) {
  console.error(err.stack);

  const nav = "";

  res.status(err.status || 500).render("errors/error", {
    title: "Server Error",
    message: err.message,
    nav
  });
}

module.exports = handleErrors;