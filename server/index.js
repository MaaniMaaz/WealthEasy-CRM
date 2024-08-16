const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Import the CORS middleware
const userRoutes = require('./routes/userRoutes'); // Correctly importing the router

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS for all requests before defining any routes
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB:', err));

// Define a simple route to test the server
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Use user routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
