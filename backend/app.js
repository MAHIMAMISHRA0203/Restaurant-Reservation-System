import express from "express";
import cors from "cors";
import { errorMiddleware } from "./error/error.js";
import router from "./routes/reservationRoutes.js";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from 'dotenv';

const app = express();
dotenv.config({ path: "./config/config.env" });

// Configure CORS
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:5181',
      'http://localhost:5180',
      'http://localhost:5179',
      'http://localhost:5178',
      'http://localhost:5177',
      'http://localhost:5176',
      'http://localhost:5175',
      'http://localhost:5174',
      'http://localhost:5173'
    ];
    
    if(allowedOrigins.indexOf(origin) === -1){
      return callback(new Error('The CORS policy for this site does not allow access from the specified Origin.'), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin']
}));

// Test endpoint - putting this first
app.get('/test', (req, res) => {
  console.log('Test endpoint hit!');
  return res.status(200).json({ message: 'Backend is connected!' });
});

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running'
  });
});

// Reservation routes
app.use("/api/v1/reservation", router);

// Connect to database
dbConnection();

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Something went wrong!'
  });
});

app.use(errorMiddleware);

export default app;