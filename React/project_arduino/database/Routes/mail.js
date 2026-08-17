const express = require("express");
const MailController = require("../Controllers/mailController");
const router = express.Router();

const mailController = new MailController();

router.post("/send", mailController.sendEmail);

module.exports = router;
