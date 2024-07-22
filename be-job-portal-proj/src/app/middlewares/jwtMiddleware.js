const jwt = require("jsonwebtoken");
const keys = require('../../config/secrets');

module.exports.verifyJwt = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    let isAllow = true, info;
    jwt.verify(token, keys.jwtSecretKey, (err, decoded) => {
      if (err && err.name === "TokenExpiredError") {
        isAllow = false;
      }

      info = decoded;
    })
    
    if (isAllow) {
      req.user = info;
      return next();
    }
  }

  return res.sendStatus(403);

}