import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// MongoDB Connection URL from environment variables
const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb+srv://tharushi:NewOne@cluster1.14zt7.mongodb.net/';
const PORT = process.env.PORT || 5001;


// Connect to MongoDB
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log('Connection error:', error.message));

// Optional: Remove deprecated Mongoose options
// mongoose.set('useFindAndModify', false); // No longer needed in Mongoose 6+
