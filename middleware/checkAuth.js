const jwt = require("jsonwebtoken")

function checkAuth(req, res, next) {
  const token = req.cookies.jwt

  if (!token) {

    return res.redirect("/account/login")
  }

  try {
  
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

  
    res.locals.loggedin = true
    res.locals.accountData = decoded

    
    next()
  } catch (err) {
    console.error("❌ Invalid JWT:", err.message)

  
    res.clearCookie("jwt")
    return res.redirect("/account/login")
  }
}

module.exports = checkAuth
