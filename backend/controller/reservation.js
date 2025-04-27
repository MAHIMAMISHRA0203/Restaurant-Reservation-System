import { ErrorHandler } from '../error/error.js';
import Reservation from '../models/reservationSchema.js';



const send_reservation = async (req, res, next) => {
  try {
    console.log('Received reservation request:', req.body);
    
    const { firstName, lastName, email, date, time, phone } = req.body;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !date || !time || !phone) {
      console.log('Missing required fields:', { firstName, lastName, email, date, time, phone });
      throw new ErrorHandler('Please fill all required fields', 400);
    }

    console.log('Attempting to save reservation to database...');
    const reservation = await Reservation.create({ firstName, lastName, email, date, time, phone });
    console.log('Reservation saved successfully:', reservation);
    
    res.status(201).json({
      success: true,
      message: 'Reservation sent successfully!',
      data: reservation
    });
  } catch (error) {
    console.error('Error saving reservation:', error);
    next(error);
  }
};


export default send_reservation;
