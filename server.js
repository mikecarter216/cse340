const express = require("express")
const path = require("path")
require("dotenv").config()
const mongoose = require("mongoose")

const app = express()
const PORT = process.env.PORT || 3000

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch((err) => {
  console.error("❌ MongoDB connection error:", err)
  process.exit(1)
})

// Routes and Middleware
const invRoute = require("./routes/inventoryRoute")
const errorRoute = require("./routes/errorRoute")
const handleErrors = require("./utilities/errorHandler")

app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use("/inv", invRoute)
app.use("/", errorRoute)

app.get("/", (req, res) => {
  res.render("index", {
    title: "CSE Motors",
    nav: "<nav><a href='/'>Home</a> | <a href='/inv/detail/1'>Delorean</a></nav>"
  })
})

app.use(handleErrors)

const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err))

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})