const express = require("express");

const router = express.Router();
const candidateController = require("../app/controllers/CandidateController.controller");

router.delete("/:uid/resume/:resumeId", candidateController.deleteResume);
router.post("/resumes/:uid", candidateController.updateResumes);
router.post("/avatar/:uid", candidateController.updateAvatar);
router.post("/info/:uid", candidateController.updateInfo);
router.get("/info/:uid", candidateController.getInfo);

module.exports = router;