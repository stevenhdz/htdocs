const express = require("express");
const BackupController = require("../Controllers/backupController");
const router = express.Router();

const backupController = new BackupController();

router.get("/", backupController.backupBD);
router.get("/u", backupController.informeUsers);
router.get("/h", backupController.informeHardware);

module.exports = router;