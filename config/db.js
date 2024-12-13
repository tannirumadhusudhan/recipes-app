require('dotenv').config();  // Load environment variables

const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI;  // Read the connection string from the .env file

const connectDB = () => {
    mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('MongoDB Atlas connected successfully');
      })
      .catch((err) => {
        console.error('MongoDB connection error:', err);  // Handle the error here
      });
  };
  
  module.exports = connectDB;
