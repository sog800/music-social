const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // You can add more fields specific to admin profiles
    // For example: full name, profile picture, etc.
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminSchema);
