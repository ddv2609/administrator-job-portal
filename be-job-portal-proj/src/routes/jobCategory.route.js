const express = require("express");

const router = express.Router();
const jobCategoryController = require("../app/controllers/JobCategory.controller");

router.post("/new", jobCategoryController.createJobCategry);

module.exports = router;