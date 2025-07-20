function checkRole(allowedRoles = []) {
  return function (req, res, next) {
    const user = res.locals.accountData

    // Ensure user is logged in and has a role
    if (!user || !user.role) {
      return res.status(403).render("errors/403", {
        title: "Forbidden",
        message: "You do not have permission to access this page."
      })
    }

    if (!allowedRoles.includes(user.role)) {
      return res.status(403).render("errors/403", {
        title: "Forbidden",
        message: "Access denied: Insufficient permissions."
      })
    }

    next()
  }
}

module.exports = checkRole
