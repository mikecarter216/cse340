const express = require("express")
const router = express.Router()

router.get("/cause-error", (req, res) => {
  throw new Error("Intentional 500 Error for testing")
})

module.exports = router