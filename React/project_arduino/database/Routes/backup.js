const express = require("express");
const BackupController = require("../Controllers/backupController");
const router = express.Router();

const backupController = new BackupController();

router.get("/", backupController.backupBD);

module.exports = router;