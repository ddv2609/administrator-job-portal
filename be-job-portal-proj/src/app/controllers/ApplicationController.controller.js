const Application = require("../models/Application.model");
const Job = require("../models/Job.model");
const Employer = require("../models/Employer.model");

const path = require("path");
const { bucket, getDownloadURL } = require("../../config/firebase");

class ApplicationController {
  // [POST] /api/application/apply/uploaded-resume
  async applyForJob(req, res) {
    const { uid } = req.user;
    // resume is name: abc.pdf, xyz.docx, ...
    const { job, resume, description } = req.body;

    try {
      const jobInfo = await Job.findById(job).select("deadlineForSubmission company");
      const docs = await Application.countDocuments({ candidate: uid, job: job });
      
      if (docs === 0 && (new Date(jobInfo.deadlineForSubmission)).getTime() >= (new Date()).getTime()) {
        const employer = await Employer.findOne({ company: jobInfo.company });
        const fileType = path.extname(resume);
        const srcFilePath = `candidate/${req.user.id}/resumes/${resume}`;
        const destFilePath = `employer/${employer.member}/jobs/${job}/${req.user.id}${fileType}`;

        await bucket.file(srcFilePath).copy(bucket.file(destFilePath));

        const url = await getDownloadURL(bucket.file(destFilePath));

        await Application.create({
          candidate: uid,
          job: job,
          resume: url,
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
