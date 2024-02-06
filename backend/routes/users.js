require("dotenv").config();
const express = require("express");
const router = express.Router();
const User = require("../database/model/user");
const bcrypt = require("bcryptjs"); // For password hashing
const jwt = require("jsonwebtoken"); // For generating JSON Web Tokens
const passport = require("passport");

router.use(express.urlencoded({ extended: false }));

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await User.find();

    // Send the list of users as a response
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

// Create account route
router.post("/create", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Create a new user instance
    const user = new User({ username, email, password: hashedPassword });

    // Save the user to the database
    await user.save();

    // Return a success message
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "Unable to create the User please try again" });
  }
});

// POST route to handle user login
router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Check if the password is correct
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // If username and password are correct, create a JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username }, // Payload data
      process.env.SESSION_SECRET, // Secret key
      { expiresIn: "1h" } // Token expiration time
    );

    // Send the token as a response
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
});

// Middleware function to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SESSION_SECRET);
    req.user = decoded; // Store the decoded user information in the request object
    console.log(req.user.username);
    next();
  } catch (error) {
    console.log("invalid token");
    return res.status(401).json({ message: "Invalid token." });
  }
}

// Route handler for profile endpoint
router.get("/profile", verifyToken, async (req, res, next) => {
  try {
    const userName = req.user.username;
    console.log(userName);

    // Fetch the user information based on the email
    const user = await User.findOne({ username: userName });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Send the user information as response
    res.json({ user });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

// DELETE route to delete a user by username
router.delete("/:username", async (req, res) => {
  try {
    const username = req.params.username;

    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Delete the user
    await User.findOneAndDelete({ username });

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
