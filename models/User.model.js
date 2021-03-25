const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
 
  googleId: String,
  userName: {
    type: String,
    unique: true,
    //required: true,
  },
  email: {
    type: String,
    unique: true,
   // required: true,
  },
  password: {
    type: String,
   // required: true,
  },
  confirmPassword: {
    type: String,
   // required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
