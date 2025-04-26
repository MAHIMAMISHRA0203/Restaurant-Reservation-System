import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const reservation = location.state?.reservation;

  if (!reservation) {
    return <div>Error: No reservation data found.</div>;
  }

  return (
    <div className="success-page">
      <h1>Reservation Successful!</h1>
      <h3>Reservation Details:</h3>
      <ul>
        <li><strong>First Name:</strong> {reservation.firstName}</li>
        <li><strong>Last Name:</strong> {reservation.lastName}</li>
        <li><strong>Email:</strong> {reservation.email}</li>
        <li><strong>Phone:</strong> {reservation.phone}</li>
        <li><strong>Date:</strong> {reservation.date}</li>
        <li><strong>Time:</strong> {reservation.time}</li>
      </ul>
    </div>
  );
};

export default Success;
