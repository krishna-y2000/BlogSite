const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const  userGoogle = require("../models/googleModel");
require('../routes/passport');
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

    userGoogle.findOne(payload.email, (err, user) => {
      if (err) {
        return res.status(422).json("Oops! something went wrong!");
      }

      if (!user) {
        return next();
      }

      req.user = {
        email : user.email,
        provider : user.provider
      };

      next();
    });
  });
};
