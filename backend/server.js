import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoutes.js';

dotenv.config({ path: './config/config.env' });

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:5181',
    'http://localhost:5180',
    'http://localhost:5179',
    'http://localhost:5178',
    'http://localhost:5177',
    'http://localhost:5176',
    'http://localhost:5175',
    'http://localhost:5174',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin']
}));

// Routes
app.use('/api/v1/reservation', reservationRouter);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Error handling
app.use(errorMiddleware);

// Database connection
dbConnection();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;