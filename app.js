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

app.get('/', (req, res) => {
    res.send('Welcome to the Recipes API. Use /api/recipes to interact with the API.');
});

// Start the server
//const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
