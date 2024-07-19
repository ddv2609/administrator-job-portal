const authRoute = require("./auth.route");

module.exports = (app) => {
  app.use("/auth", authRoute);
  app.get("/", (req, res) => {
    res.json({
      message: "Initial backend for job protal website",
    })
  })
};
