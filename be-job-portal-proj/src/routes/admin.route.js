const express = require("express");

const router = express.Router();
const adminController = require("../app/controllers/AdminController.controller");

router.post("/verify", adminController.verifyMembers);
router.post("/enable", adminController.enableMembers);
router.post("/hidden", adminController.hiddenMembers);
router.get("/list/:role", adminController.getListMembers);
router.get("/statistic/:role", adminController.statisticByMonth);
router.get("/overview", adminController.overviewInfo);

module.exports = router;