const express = require("express");

const router = express.Router();
const { uploadImage } = require("../config/multer");

const adminController = require("../app/controllers/AdminController.controller");

router.delete("/avatar", adminController.deleteAvatar);
router.post("/avatar", uploadImage.single("file"), adminController.updateAvatar);
router.post("/info", adminController.updateAdminInfo);
router.get("/info", adminController.getAdminInfo);
router.post("/:role/delete", adminController.deleteMembers);
router.get("/list/companies", adminController.getListCompanies);
router.post("/verify", adminController.verifyMembers);
router.post("/enable", adminController.enableMembers);
router.post("/hidden", adminController.hiddenMembers);
router.get("/list/:role", adminController.getListMembers);
router.get("/statistic/:role", adminController.statisticByMonth);
router.get("/overview", adminController.overviewInfo);

module.exports = router;