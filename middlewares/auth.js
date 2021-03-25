const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  // Check if there is a token

  if (!token) {
    return next();
  }

  //Verify token
  // try {
  //   jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
  //   if (err || !payload) {
  //     return next();
  //   }
    
  //   }
  // }
  //   // const decoded = jwt.verify(token, process.env.SECRET_KEY);
  //   // console.log(decoded);
  //   // req.user = decoded.user;
  //   // next();
  //  catch (err) {
  //   res.status(401).json({ msg: 'Token is not valid' });
  // }
  //Check if it is valid
  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err || !payload) {
      return next();
    }
    console.log(payload.user);
    req.user = payload.user;
    // User.findById(payload._id, (err, user) => {
    //   if (err) {
    //     return res.status(422).json("Oops! something went wrong!");
    //   }

    //   if (!user) {
    //     return next();
    //   }

    //   req.user = {
    //     _id: user._id,
    //     name: user.userName,
    //   };

      next();
   
  });
};
