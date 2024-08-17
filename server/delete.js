const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

// Adjust the path to your User model
const User = require('C:/Users/mirmu/Downloads/WealthEasy-CRM-main/WealthEasy-CRM-main/server/models/User.js');

// Function to delete a user and recreate with a hashed password
const resetUserPassword = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const email = 'john.doe@example.com';
    
    // Delete the existing user
    await User.deleteOne({ email });
    console.log(`User with email ${email} deleted successfully.`);

    // Create a new user with a hashed password
    const hashedPassword = await bcrypt.hash('hashedpassword123', 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      fullName: 'John Doe', // Add other fields as necessary
      role: 'manager', // Example field
    });

    console.log('New user created successfully:', newUser);
  } catch (err) {
    console.error('Error resetting user password:', err);
  } finally {
    mongoose.disconnect();
  }
};

// Run the function to reset the user's password
resetUserPassword();
