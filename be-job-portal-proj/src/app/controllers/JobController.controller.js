const Job = require("../models/Job.model");

class JobController {
  // [GET] /api/job/suggestion?page=<number>&size=<number>
  async getAllJobs(req, res) {
    const { page, size } = req.query;

    try {
      const total = await Job.countDocuments();
      const jobs = await Job.find()
        .skip((page - 1) * size)
        .limit(size)
        .select("-__v -updatedAt -hiddenAt -hiddenBy")
        .populate("company")
        .populate("categories");

      return res.json({
        jobs,
        info: {
          total,
          page,
          size,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  // [GET] /api/job/info/:jobId
  async getJobInfo(req, res) {
    const { jobId } = req.params;
    try {
      const job = await Job.findOne({
        _id: jobId,
        hidden: false,
      }).select("-__v -updatedAt -hiddenAt -hiddenBy");

      return res.json({
        info: job,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }
}

module.exports = new JobController();
