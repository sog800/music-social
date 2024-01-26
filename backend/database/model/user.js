const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
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
    profilePicture: {
      type: String,
      default: "default_profile_picture.jpg", // You can set a default profile picture
    },
    bio: {
      type: String,
      default: "", // A brief bio about the user
    },
    favoriteGenres: [
      {
        type: String,
      },
    ],
    // You might want to add more fields like date of birth, location, etc. as per your requirements
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // Any other fields you might need
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
