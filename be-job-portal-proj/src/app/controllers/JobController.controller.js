const Job = require("../models/Job.model");

class JobController {
  // [GET] /api/job/suggestion?page=<number>&size=<number>
  async getAllJobs(req, res) {
    const { page=1, size=0 } = req.query;

    try {
      const total = await Job.countDocuments();
      const jobs = await Job.find({
        hidden: false,
      })
        .skip((page - 1) * size)
        .limit(size)
        .select("-__v -updatedAt -hiddenAt -hiddenBy")
        .populate("categories")
        .populate({
          path: "company",
          select: "_id name logo companySize field address website",
        });

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

  // [GET] api/job/search?q=<string>&location=<string>&category=<ObjectId>&page=<number>&size=<number>
  async searchJobs(req, res) {
    const { page=1, size=0, q="", location, category } = req.query;
    console.log(q);
    
    try {
      const total = await Job.countDocuments({
        $or: [
          { title: { $regex: q, $options: 'i' }, },
          { locations: {
            $elemMatch: { province: location }
          }, },
          { categories: category }
        ]
      });

      const jobs = await Job.find({
        $or: [
          { title: { $regex: q, $options: 'i' }, },
          { locations: {
            $elemMatch: { province: location }
          }, },
          { categories: category }
        ]
      })
        .skip((page - 1) * size)
        .limit(size)
        .select("-__v -updatedAt -hiddenAt -hiddenBy")
        .populate("categories")
        .populate({
          path: "company",
          select: "_id name logo companySize field address website",
        });

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
      })
        .select("-__v -updatedAt -hiddenAt -hiddenBy")
        .populate("categories")
        .populate({
          path: "company",
          select: "_id name logo companySize field address website",
        });

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
