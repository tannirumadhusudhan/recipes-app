require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
 const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/recipes', require('./routes/recipeRoutes'));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
