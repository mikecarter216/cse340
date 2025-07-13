const express = require("express")
const router = express.Router()

router.get("/trigger-error", (req, res, next) => {
  try {
    throw new Error("Intentional test error from footer")
  } catch (err) {
    next(err)
  }
})

module.exports = router