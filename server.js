require("dotenv").config()
const express = require("express")
const path = require("path")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const { connectDB } = require("./config/db") // PostgreSQL

const app = express()
const PORT = process.env.PORT || 3000

// Connect to PostgreSQL
connectDB()

// Middleware
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

// View Engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// JWT Middleware
app.use((req, res, next) => {
  const token = req.cookies.jwt
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      res.locals.loggedin = true
      res.locals.accountData = decoded
    } catch (err) {
      res.locals.loggedin = false
    }
  } else {
    res.locals.loggedin = false
  }
  next()
})

// Routes
const invRoute = require("./routes/inventoryRoute")
const accountRoute = require("./routes/accountRoute")
const errorRoute = require("./routes/errorRoute")

app.use("/inv", invRoute)
app.use("/account", accountRoute)
app.use("/", errorRoute)

// Home Route
app.get("/", (req, res) => {
  res.render("index", {
    title: "CSE Motors",
    nav: "<nav><a href='/'>Home</a> | <a href='/inv/detail/1'>Delorean</a></nav>"
  })
})

// Error handler
const handleErrors = require("./utilities/errorHandler")
app.use(handleErrors)

// Start server
app.listen(PORT, () => {
  console.log(`🚗 Server running at http://localhost:${PORT}`)
})
