require('dotenv').config({ path: "../.env" });
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/User.model");
passport.serializeUser(function(user, done) {
    done(null , user.id);
} );

passport.deserializeUser(function(id, done) {
    User.findById(id).then(user => {
        done(null, user);
      });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
} ,
function(accessToken, refreshToken, profile, cb) {
    User.findOne({ email: profile._json.email }, (err, user) => {
        if (err) {
          return cb(err, false);
        }
        if (!err && user !== null) {
          console.log('existing user');
          return cb(null, user);
        } else {
          user = new User({ firstName: profile.displayName });
          user.googleId = profile.id;
          user.email = profile._json.email ;
          
          console.log('new user');
          user.save((err, user) => {
            if (err) return cb(err, false);
            else return cb(null, user);
          });
        }
      });
  } ) 
);
