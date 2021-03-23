const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
 
  email: {
    type: String,
    unique: true,
    required: true,
  },
  
  provider: {
    type: String,
  }
});

module.exports = mongoose.model("UserGoogle", UserSchema);
