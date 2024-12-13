require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use('/api/recipes', require('./routes/recipeRoutes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
