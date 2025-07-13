const express = require("express");
const router = express.Router();

// Footer test error route
router.get("/trigger-error", (req, res, next) => {
  next(new Error("Intentional test error from footer"));
});

module.exports = router;