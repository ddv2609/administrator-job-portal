const express = require("express");

const router = express.Router();
const applicationController = require("../app/controllers/ApplicationController.controller");
const { roleVerify } = require("../app/middlewares/roleMiddleware");

router.post("/apply/uploaded-resume", roleVerify("candidate"), applicationController.applyForJob);

module.exports = router;