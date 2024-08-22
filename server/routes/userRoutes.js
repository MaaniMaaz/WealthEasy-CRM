// routes/userRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();

const router = express.Router();

// MongoDB User model
const User = mongoose.model('User', new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  role: { type: String, required: true }, // Assuming you also have a role field
}));

// Login API endpoint
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    console.log('Received login request:', req.body); // Log the request body
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) return res.status(400).send('User not found');
  
      console.log('User password from DB:', user.password); // Log the hashed password from DB
      console.log('Password from frontend:', password); // Log the comparison result

      // Compare passwords
      const validPassword = await bcrypt.compare(password, user.password);
      console.log('Password comparison result:', validPassword); // Log the comparison result
  
      if (!validPassword) return res.status(400).send('Invalid password');
  
      // Create and send JWT token
      const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
      
      // Send back the token and user object
      res.send({ token, user });
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
});

module.exports = router;
