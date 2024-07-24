const Candidate = require("../models/Candidate.model");
const Employer = require("../models/Employer.model");
const Member = require("../models/Member.model");

class AdminController {
  // [GET] /api/admin/overview
  async overviewInfo(req, res) {
    const { role } = req.user;

    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const today = new Date();

    const firstDayOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    const firstDayOfCurrMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfCurrMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    await Promise.all([
      Member.countDocuments({
        createdAt: {
          $gte: firstDayOfCurrMonth,
          $lte: lastDayOfCurrMonth,
        },
        role: "candidate",
      }),
      Member.countDocuments({
        createdAt: {
          $gte: firstDayOfCurrMonth,
          $lte: lastDayOfCurrMonth,
        },
        role: "employer",
      }),
      Member.countDocuments({
        createdAt: {
          $gte: firstDayOfLastMonth,
          $lte: lastDayOfLastMonth,
        },
        role: "candidate",
      }),
      Member.countDocuments({
        createdAt: {
          $gte: firstDayOfLastMonth,
          $lte: lastDayOfLastMonth,
        },
        role: "employer",
      }),
    ]).then(([currCandidate, currEmployer, lastCandidate, lastEmployer]) => {
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
    });
  }

  // [GET] /api/admin/statistic/?
  async statisticByMonth(req, res) {
    const { role } = req.user;

    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const pos = req.params.role;

    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const today = new Date();

    const currentMonth = today.getMonth();

    await Promise.all(months.slice(0, today.getMonth() + 1).map((_, index) => Member.countDocuments({
      createdAt: {
        $gte: new Date(today.getFullYear(), index, 1),
        $lte: new Date(today.getFullYear(), index + 1, 0),
      },
      role: pos,
    })))
      .then((data) => {

        return res.json({
          labels: months.slice(0, today.getMonth() + 1),
          statistic: data,
        });
      });
  }
}

module.exports = new AdminController;
