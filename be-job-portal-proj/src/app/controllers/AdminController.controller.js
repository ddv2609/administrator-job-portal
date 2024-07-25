const Candidate = require("../models/Candidate.model");
const Employer = require("../models/Employer.model");
const Admin = require("../models/Admin.model");
const Member = require("../models/Member.model");

const fs = require("fs");
const path = require("path");

const mailer = require("../../utils/mail/mailing");

class AdminController {
  // [GET] /api/admin/overview
  async overviewInfo(req, res) {

    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const today = new Date();

    const firstDayOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const firstDayOfCurrMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfCurrMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    Member.find({
      createdAt: {
        $gte: firstDayOfLastMonth,
        $lte: lastDayOfCurrMonth,
      },
      $or: [
        { role: "candidate", },
        { role: "employer", },
      ]
    }).then(members => {
      let [currCandidate, currEmployer, lastCandidate, lastEmployer] = [0, 0, 0, 0];
      members.forEach((member) => {
        if (member.role === "candidate") {
          if (firstDayOfCurrMonth <= member.createdAt && member.createdAt <= lastDayOfCurrMonth)
            currCandidate++;
          else lastCandidate++;
        } else {
          if (firstDayOfCurrMonth <= member.createdAt && member.createdAt <= lastDayOfCurrMonth)
            currEmployer++;
          else lastEmployer++;
        }
      });

      return res.json({
        admin: req.user,
        candidates: {
          currAmount: currCandidate,
          lastAmount: lastCandidate,
        },
        employers: {
          currAmount: currEmployer,
          lastAmount: lastEmployer,
        }
      });
    })
  }

  // [GET] /api/admin/statistic/<role>
  async statisticByMonth(req, res) {

    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const pos = req.params.role;

    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const currentMonth = today.getMonth();

    Member.find({
      createdAt: {
        $gte: new Date(today.getFullYear(), 0, 1),
        $lte: new Date(today.getFullYear(), currentMonth + 1, 0),
      },
      $or: [
        { role: "candidate", },
        { role: "employer", },
      ]
    }).then(members => {
      const data = Array(currentMonth + 1).fill(0);
      members.forEach((member) => data[new Date(member.createdAt).getMonth()]++);

      return res.json({
        labels: months.slice(0, today.getMonth() + 1),
        statistic: data,
      });
    })
  }

  // [GET] /api/admin/list/<role>?hide=<boolean>
  async getListMembers(req, res) {
    const { role } = req.params;
    const { hidden, page, size } = req.query;

    try {
      const total = await Member.countDocuments({ 
        role: role,
        hidden: hidden === "true",
      });

      let members = [];
      const excludeFields = '-password -createdAt -updatedAt -hiddenAt -hiddenBy';
      switch (role) {
        case "employer":
          const employers = await Employer.find({}).populate({
            path: "member",
            match: { 
              hidden: hidden === "true",
            },
            options: { skip: (page - 1) * size, limit: size },
            select: excludeFields,
          });
          members = employers.filter(candidate => candidate.member !== null);
          break;
        case "admin":
          const admins = await Admin.find({}).populate({
            path: "member",
            match: { 
              hidden: hidden === "true",
            },
            options: { skip: (page - 1) * size, limit: size },
            select: excludeFields,
          });
          members = admins.filter(candidate => candidate.member !== null);
          break;
        case "candidate":
          const candidates = await Candidate.find({}).populate({
            path: "member",
            match: { 
              hidden: hidden === "true",
            },
            options: { skip: (page - 1) * size, limit: size },
            select: excludeFields,
          });
          members = candidates.filter(candidate => candidate.member !== null);
          break;
        default:
          break;
      }

      return res.json({
        members,
        info: {
          page,
          size,
          total,
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: `Có lỗi xảy ra: Error code <${error.code}>`,
      })
    }
  }

  // [POST] /api/admin/hidden
  async hiddenMembers(req, res) {
    const { members, adminId } = req.body;
    const emails = members?.map((mem) => mem.email);
    const memIds = members?.map((mem) => mem.mbid);

    try {
      await Member.updateMany({ _id: { $in: memIds } }, {
        hidden: true,
        hiddenAt: new Date(),
        hiddenBy: adminId,
      })

      const emailTemplatePath = path.join(__dirname, '../../resources/views/form-notify.html');
      const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf8');
      const emailContent = emailTemplate.replace('{{message}}', `
        Tài khoản của bạn đã bị quản trị viên vô hiệu hóa. 
        Hiện tại bạn không thể truy cập trang web của chúng tôi thông qua tài khoản đăng ký bởi email này.
      `);

      emails.forEach((email) => mailer.sendMail(email, "Vô hiệu hóa tài khoản", emailContent));

      console.log("Send all mails!");

      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: `Có lỗi xảy ra: ${error.code ? "Error code <" + error.code + ">" : error.message}`,
      })
    }
  }

  // [POST] /api/admin/enable
  async enableMembers(req, res) {
    const { members } = req.body;
    const emails = members?.map((mem) => mem.email);
    const memIds = members?.map((mem) => mem.mbid);

    try {
      await Member.updateMany({ _id: { $in: memIds } }, {
        hidden: false,
        hiddenAt: null,
        hiddenBy: null,
      })

      const emailTemplatePath = path.join(__dirname, '../../resources/views/form-notify.html');
      const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf8');
      const emailContent = emailTemplate.replace('{{message}}', `
        Tài khoản của bạn đã được quản trị viên khôi phục sau khi bị vô hiệu hóa.
        Bạn có thể tiếp tục sử dụng tài khoản để đăng nhập vào trang web của chúng tôi.  
      `);
      emails.forEach((email) => mailer.sendMail(email, "Khôi phục tài khoản", emailContent));

      console.log("Send all mails!");

      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: `Có lỗi xảy ra: ${error.code ? "Error code <" + error.code + ">" : error.message}`,
      })
    }
  }

  // [POST] /api/admin/verify
  async verifyMembers(req, res) {
    const { members } = req.body;
    const emails = members?.map((mem) => mem.email);
    const memIds = members?.map((mem) => mem.mbid);
    
    try {
      await Member.updateMany({ _id: { $in: memIds } }, {
        verifiedAt: new Date(),
      })

      const emailTemplatePath = path.join(__dirname, '../../resources/views/form-notify.html');
      const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf8');
      const emailContent = emailTemplate.replace('{{message}}', `
        Tài khoản của bạn đã được quản trị viên xác minh thủ công.
        Giờ đây bạn có thể sử dụng tài khoản đã đăng ký dựa trên email này để đăng nhập vào website của chúng tôi.  
      `);
      emails.forEach((email) => mailer.sendMail(email, "Tài khoản đã được xác minh", emailContent));

      console.log("Send all mails!");

      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: `Có lỗi xảy ra: ${error.code ? "Error code <" + error.code + ">" : error.message}`,
      })
    }
  }
}

module.exports = new AdminController;
