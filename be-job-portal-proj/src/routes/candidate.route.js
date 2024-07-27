const express = require("express");

const router = express.Router();
const candidateController = require("../app/controllers/CandidateController.controller");

router.delete("/resume/:resumeId", candidateController.deleteResume);
router.post("/resumes/", candidateController.updateResumes);
router.post("/avatar/", candidateController.updateAvatar);
router.post("/info/", candidateController.updateInfo);
router.get("/info/", candidateController.getInfo);

module.exports = router;