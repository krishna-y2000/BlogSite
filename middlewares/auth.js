const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  // Check if there is a token

  if (!token) {
    return next();
  }

  //Check if it is valid
  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err || !payload) {
      return next();
    }
    console.log(payload.user);
    req.user = payload.user;
   
  });
};
