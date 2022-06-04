const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;
require("dotenv").config();

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "Name required"],
      trim: true,
    },
    userEmail: {
      type: String,
      required: [true, "Email required"],
      trim: true,
    },
    userPhone: {
      type: Number,
      required: [true, "Phone required"],
      trim: true,
    },
    userPassword: {
      type: String,
      required: [true, "Password required"],
      trim: true,
    },
    userAddress: {
      type: String,
      trim: true,
    },
    userSecurityQuestion: {
      type: String,
      required: [true, "Security Question required"],
      trim: true,
    },
    userSecurityQuestionAns: {
      type: String,
      required: [true, "Security Question Answer required"],
      trim: true,
    },
    userType: {
      type: String,
      required: [true, "User Type required required"],
      trim: true,
    },
    userImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.userName,
    },
    process.env._jwtprivate
  );
  return token;
};

const UserProfile = mongoose.model("UserProfile", userSchema);

module.exports = UserProfile;
