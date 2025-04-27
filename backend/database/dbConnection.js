import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000 // 5 second timeout
    });

    console.log(`MongoDB connected successfully to: ${connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      code: error.code
    });
    process.exit(1);
  }
};