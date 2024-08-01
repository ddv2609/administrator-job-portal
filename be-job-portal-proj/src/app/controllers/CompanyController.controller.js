const Company = require("../models/Company.model");
const Job = require("../models/Job.model");

class CompanyController {
  // [GET] /api/company/info/
  async getCompanyInfo(req, res) {
    const companyId = req.user.companyId;

    try {
      const company = await Company.findById(companyId);

      return res.json({
        info: company,
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  // [POST] /api/company/info/
  async updateCompanyInfo(req, res) {
    const companyId = req.user.companyId;
    const info = req.body;

    try {
      delete info.logo;
      delete info.license;

      const company = await Company.findByIdAndUpdate(companyId, {
        ...info
      }, { new: true }).select("-__v");

      return res.json({
        info: company,
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  //[GET] /api/company/jobs?page=<number>&size=<number>
  async getJobsOfCompany(req, res) {
    const companyId = req.user.companyId;
    const { page = 1, size = 0 } = req.query;

    try {
      const total = await Job.countDocuments({ company: companyId });
      const jobs = await Job.find({ company: companyId })
        .skip((page - 1) * size)
        .limit(size)
        .select("-updatedAt -hiddenAt -hiddenBy -__v")
        .populate("categories");

      return res.json({
        jobs,
        info: {
          total,
          page,
          size,
        }
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  // [POST] /api/company/post-job
  async postJob(req, res) {
    const companyId = req.user.companyId;
    const info = req.body;

    try {
      const job = await Job.create({
        ...info,
        company: companyId,
      });

      return res.json({
        info: job
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  // [POST] /api/company/hidden-job/:jobId
  async hiddenJob(req, res) {
    const companyId = req.user.companyId;
    const { jobId } = req.params;

    try {
      await Job.updateOne({
        _id: jobId,
        company: companyId,
      }, {
        hidden: true,
        hiddenAt: Date.now(),
      });

      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  // [GET] /api/company/application/:jobId
}

module.exports = new CompanyController;