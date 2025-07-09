const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");

router.get("/trigger-error", testController.throwError);

module.exports = router;
