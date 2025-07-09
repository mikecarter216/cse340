const express = require("express")
const path = require("path")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3000

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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})