const express = require("express");

const router = express.Router();
const { uploadImage, uploadResume } = require("../config/multer");
const candidateController = require("../app/controllers/CandidateController.controller");

router.get("/applied", uploadImage.single("file"), candidateController.getJobApplied);
router.delete("/resume/:resumeId", candidateController.deleteResume);
router.post("/resumes/", uploadResume.single("file"), candidateController.updateResumes);
router.post("/avatar/", candidateController.updateAvatar);
router.post("/info/", candidateController.updateInfo);
router.get("/info/", candidateController.getInfo);

module.exports = router;