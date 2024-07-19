const Member = require("../models/Member.model");
const Candidate = require("../models/Candidate.model");
const Employer = require("../models/Employer.model");
const Admin = require("../models/Admin.model");

const mongoose = require("mongoose");
const mailer = require("../../utils/mail/mailing");
const bcrypt = require("bcrypt");
const keys = require("../../config/secrets");
const fs = require("fs");
const path = require("path");

class AuthController {

  // [POST] /auth/login
  async loginWithPassword(req, res, next) {
    const { email, password } = req.body;
    const member = await Member.findOne({ email: email });

    if (member && member.verifiedAt !== null) {
      bcrypt.compare(password, member.password, (err, result) => {
        if (result) {
          return res.json({
            message: "Logged in successfully",
          });
        } else {
          return res.status(401).json({
            message: "Email or password is incorrect",
          });
        }
      });

    } else {
      return res.status(401).json({
        message: "Email or password is incorrect",
      });
    }

  }

  // [POST] /auth/sign-up/candidate
  async candidateRegister(req, res) {
    let info = req.body;
    if (info.password !== info["confirm-password"]) {
      return res.status(409).json({
        message: "User's credential is not valid",
      })
    }
    const email = await Member.findOne({ email: info.email })
    if (email) {
      return res.status(409).json({
        message: "Email already exists",
      });
    } else {
      await bcrypt.hash(info.password, keys.BCRYPT_SALT_ROUND)
        .then((hashPassword) => info = { ...info, password: hashPassword })

      const session = await mongoose.startSession();
      session.startTransaction();
      try {

        const newMember = await Member.create([{
          ...info,
          role: "user"
        }], { session });

        await Candidate.create([{
          member: newMember.id,
        }], { session })

        const emailTemplatePath = path.join(__dirname, '../../resources/views/form-verify.html');
        const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf8');
        console.log("oke");

        await session.commitTransaction();
        session.endSession();

        await bcrypt.hash(info.email, keys.BCRYPT_SALT_ROUND)
          .then((hashEmail) => {
            const emailContent = emailTemplate.replace('{{verificationLink}}', `${process.env.APP_URL}/auth/verify?email=${info.email}&token=${hashEmail}`);
            // mailer.sendMail(info.email, "Verify Email", `<a href="">Verify</a>`);
            mailer.sendMail(info.email, "Verify Email", emailContent);
          })

        return res.json({
          message: "[Candidate] Request to sign up",
        });
      } catch (error) {
        await session.abortTransaction();
        session.endSession();

        return res.status(500).json({
          message: error,
        })
      }
    }
  }

  // [POST] /auth/sign-up/employer
  employerRegister(req, res, next) {

    next();
  }

  // [GET] /auth/verify
  verifyEmail(req, res) {
    const { email, token } = req.query;
    bcrypt.compare(email, token, async (err, result) => {
      if (result) {
        await Member.updateOne({ email: email }, {
          verifiedAt: new Date(),
        })

        return res.redirect(`${process.env.URL_CLIENT}/verify/success`);
      } 

      return res.redirect(`${process.env.URL_CLIENT}/verify/error`);
    });
  }

}

module.exports = new AuthController;