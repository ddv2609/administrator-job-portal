const express = require("express");

const router = express.Router();
const { uploadImage } = require("../config/multer");
const employerController = require("../app/controllers/EmployerController.controller");

router.post("/avatar", uploadImage.single("file"), employerController.updateAvatar);
router.post("/info", employerController.updateInfo);
router.get("/info", employerController.getInfo);

module.exports = router;