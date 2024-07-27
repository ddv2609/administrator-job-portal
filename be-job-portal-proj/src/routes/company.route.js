const express = require("express");

const router = express.Router();
const companyController = require("../app/controllers/CompanyController.controller");

router.post("/post-job", companyController.postJob);
router.get("/jobs", companyController.getJobsOfCompany);
router.post("/info", companyController.updateCompanyInfo);
router.get("/info", companyController.getCompanyInfo);

module.exports = router;