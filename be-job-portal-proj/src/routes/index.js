const authRoute = require("./auth.route");
const adminRoute = require("./admin.route");

const { verifyJwt } = require("../app/middlewares/jwtMiddleware");
const { roleVerify } = require("../app/middlewares/roleMiddleware");

module.exports = (app) => {
  app.use("/api/admin", verifyJwt, roleVerify("admin"), adminRoute);
  app.use("/auth", authRoute);
  app.get("/", (req, res) => {
    res.json({
      message: "Initial backend for job protal website",
    })
  })
};
