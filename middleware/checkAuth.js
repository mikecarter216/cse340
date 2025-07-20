const jwt = require("jsonwebtoken")

function checkAuth(req, res, next) {
  const token = req.cookies.jwt

  if (!token) {
    // No token? User is not logged in
    return res.redirect("/account/login")
  }

  try {
    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Make account data available in views
    res.locals.loggedin = true
    res.locals.accountData = decoded

    // Continue to protected route
    next()
  } catch (err) {
    console.error("❌ Invalid JWT:", err.message)

    // Clear invalid token and redirect to login
    res.clearCookie("jwt")
    return res.redirect("/account/login")
  }
}

module.exports = checkAuth
