function handleErrors(err, req, res, next) {
  console.error(err.stack); // Logs the error in the terminal

  const nav = ""; // Optional: You can replace this with getNav() if you're using dynamic navigation

  res.status(err.status || 500).render("errors/error", {
    title: "Server Error",
    message: err.message,
    nav
  });
}

module.exports = handleErrors;