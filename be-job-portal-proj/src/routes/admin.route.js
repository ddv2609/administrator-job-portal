const express = require("express");

const router = express.Router();
const adminController = require("../app/controllers/AdminController.controller");

router.get("/statistic/:role", adminController.statisticByMonth);
router.get("/overview", adminController.overviewInfo);

module.exports = router;