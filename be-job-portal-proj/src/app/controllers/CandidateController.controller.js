const Member = require("../models/Member.model");
const Candidate = require("../models/Candidate.model");

const mongoose = require("mongoose");

class CandidateController {

  // [GET] /api/candidate/info/
  async getInfo(req, res) {
    const mid = req.user.id;

    try {
      const candidate = await Candidate.findOne({ member: mid }).select("-__v").populate({
        path: "member",
        select: "-updatedAt -password -role -hidden -__v"
      })

      return res.json({
        info: candidate,
      });
    } catch (error) {
      console.log(error);
      return res.json(500).json({
        message: error.toString(),
      });
    }
  }

  // [POST] /api/candidate/info/
  async updateInfo(req, res) {
    const mid = req.user.id;

    const info = req.body;

    try {
      const session = await mongoose.startSession();
      session.startTransaction();

      const candidate = await Candidate.findOneAndUpdate({ member: mid }, {
        education: info.education,
      }, { new: true }).select("-__v")

      delete info.resumes;
      delete info.avatar;
      delete info.education;

      const member = await Member.findOneAndUpdate({ _id: mid }, {
        ...info,
      }, { new: true }).select("-updatedAt -password -role -hidden -__v");

      await session.commitTransaction();
      session.endSession();

      return res.json({
        info: { 
          ...candidate.toObject(), 
          member,
        },
      });
    } catch (error) {
      console.log(error);
      await session.abortTransaction();
      session.endSession();

      return res.json(500).json({
        message: error.toString(),
      });
    }
  }

  // [POST] /api/candidate/avatar/
  async updateAvatar(req, res) {
    const mid = req.user.id;

    const { avatar } = req.body;

    try {
      await Member.updateOne({ _id: mid }, {
        avatar: avatar,
      });

      return res.json({
        data: {
          avatar: avatar,
        },
      });
    } catch (error) {
      console.log(error);
      return res.json(500).json({
        message: error.toString(),
      });
    }
  }

  // [POST] /api/candidate/resumes/
  async updateResumes(req, res) {
    const mid = req.user.id;

    const { resumes } = req.body;

    try {
      const newResumes = await Candidate.findOneAndUpdate({ member: mid }, {
        $push: {
          resumes: {
            $each: resumes,
          }
        }
      }, { new: true }).select("resumes -_id");

      return res.json({
        data: {
          ...newResumes.toObject(),
        },
      });
    } catch (error) {
      console.log(error);
      return res.json(500).json({
        message: error.toString(),
      });
    }
  }

  // [DELETE] /api/candidate/resume/:resumeId
  async deleteResume(req, res) {
    const mid = req.user.id;
    const { resumeId } = req.params;

    try {
      await Candidate.updateOne({ member: mid }, {
        $pull: {
          resumes: {
            _id: resumeId,
          }
        }
      })

      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.json(500).json({
        message: error.toString(),
      });
    }
  }
  
}

module.exports = new CandidateController;