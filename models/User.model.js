const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
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
   
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
  },
});
// hash the password if it is modified
UserSchema.pre('save', async function (next) {
  const user = this
  if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})
module.exports = mongoose.model("User", UserSchema);
