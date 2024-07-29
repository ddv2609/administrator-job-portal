const JobCategory = require("../models/JobCategory.model");

class JobCategoryController {
  // [POST] /api/job-category/new
  async createJobCategry(req, res) {
    const info = req.body;
    
    try {
      const jobCategory = await JobCategory.create({
        ...info
      })

      return res.json({
        info: jobCategory,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }
}

module.exports = new JobCategoryController;