import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Success.css";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reservationData = location.state?.reservationData;

  console.log('Success page state:', location.state);

  // If no reservation data, show error and link to make reservation
  if (!reservationData) {
    console.log('No reservation data found');
    return (
      <div className="success-container">
        <div className="success-card">
          <h1>🔍 No Reservation Found</h1>
          <p>It seems you haven't made a reservation yet.</p>
          <div className="button-group">
            <Link to="/reservation" className="success-btn primary">
              Make a Reservation
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="success-container">
      <div className="success-card">
        <h1>🎉 Reservation Confirmed! 🎉</h1>
        <h2>Your Reservation Details</h2>
        <div className="reservation-details">
          <p><strong>Name:</strong> {reservationData.firstName} {reservationData.lastName}</p>
          <p><strong>Email:</strong> {reservationData.email}</p>
          <p><strong>Phone:</strong> {reservationData.phone}</p>
          <p><strong>Date:</strong> {reservationData.date}</p>
          <p><strong>Time:</strong> {reservationData.time}</p>
          <p><strong>Room Number:</strong> {reservationData.roomNumber}</p>
        </div>
        <p>A confirmation email will be sent shortly.</p>
        <div className="button-group">
          <Link to="/reservation" className="success-btn primary">
            Make Another Reservation
          </Link>
          <Link to="/" className="success-btn secondary">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
