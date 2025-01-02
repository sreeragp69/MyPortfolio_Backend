const express = require("express");
const Contact = require("../controllers/contactController");
const router = express.Router();

router.route("/send-mail").post(Contact);

module.exports = router;
