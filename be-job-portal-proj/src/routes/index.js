module.exports = (app) => {
  app.get("/", (req, res) => {
    res.json({
      message: "Initial backend for job protal website",
    })
  })
};
