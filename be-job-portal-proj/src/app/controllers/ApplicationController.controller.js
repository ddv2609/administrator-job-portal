const Application = require("../models/Application.model");
const Job = require("../models/Job.model");

class ApplicationController {
  // [POST] /api/job/apply
  async applyForJob(req, res) {
    const { uid } = req.user;
    const { job, resume, description } = req.body;

    try {
      const jobInfo = await Job.findById(job).select("deadlineForSubmission");
      const docs = await Application.countDocuments({ candidate: uid, job: job });
      
      if (docs === 0 && (new Date(jobInfo.deadlineForSubmission)).getTime() >= (new Date()).getTime()) {
        await Application.create({
          candidate: uid,
          job: job,
          resume: resume,
          description: description,
        });
  
        return res.sendStatus(200);
      } else {
        return res.sendStatus(403);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }
}

module.exports = new ApplicationController;
