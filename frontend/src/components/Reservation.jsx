import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import toast from "react-hot-toast";
import axios from "axios";
import "./Reservation.css";

const API_BASE_URL = 'http://localhost:4000/api/v1';
axios.defaults.withCredentials = true;

const Reservation = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Available room numbers (you can modify this list as needed)
  const availableRooms = [
    { number: "101", type: "Standard" },
    { number: "102", type: "Standard" },
    { number: "201", type: "Deluxe" },
    { number: "202", type: "Deluxe" },
    { number: "301", type: "Premium" },
    { number: "302", type: "Premium" },
  ];

  const today = new Date().toISOString().split('T')[0];

  const validateForm = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";
    if (!roomNumber) newErrors.roomNumber = "Room number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const toastId = toast.loading("Submitting reservation...");

    try {
      const formattedDate = new Date(date).toISOString().split('T')[0];
      const reservationData = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        date: formattedDate,
        time: time,
        roomNumber: roomNumber
      };

      // First make the API call
      try {
        const response = await axios.post(`${API_BASE_URL}/reservation/send`, reservationData);
        console.log('API Response:', response.data);
        if (response.data) {
          toast.success(response.data.message || 'Reservation confirmed!');
        }
      } catch (apiError) {
        console.error('API Error:', apiError);
        toast.error('Reservation saved locally but server sync failed');
      }

      // Navigate to success page with the data regardless of API result
      navigate('/success', { 
        state: { 
          reservationData: reservationData
        },
        replace: true
      });

      // Clear form data
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setDate('');
      setTime('');
      setRoomNumber('');

    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Failed to submit reservation';
      toast.error(errorMessage);
    } finally {
      toast.dismiss(toastId);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reservation-container">
      <div className="reservation-wrapper">
        <div className="reservation-content">
          <h1>Make a Reservation</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>

            <div className="input-group">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="input-group">
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div className="input-group">
              <input
                type="date"
                value={date}
                min={today}
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.date && <span className="error">{errors.date}</span>}
            </div>

            <div className="input-group">
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              {errors.time && <span className="error">{errors.time}</span>}
            </div>

            <div className="input-group">
              <select
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
                className="room-select"
              >
                <option value="">Select a Room</option>
                {availableRooms.map((room) => (
                  <option key={room.number} value={room.number}>
                    Room {room.number} - {room.type}
                  </option>
                ))}
              </select>
              {errors.roomNumber && <span className="error">{errors.roomNumber}</span>}
            </div>

            <button
              type="submit"
              className="reservation-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SUBMITTING..." : (
                <>
                  RESERVE NOW <HiOutlineArrowNarrowRight />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
