import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 characters."],
    maxLength: [30, "First name cannot exceed 30 characters."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must be of at least 3 characters."],
    maxLength: [30, "Last name cannot exceed 30 characters."],
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain 10 digits."],
    maxLength: [10, "Phone number must contain 10 digits."],
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number! Must be 10 digits.`
    }
  },
});

// Avoid overwriting the model if it already exists
const Reservation = mongoose.models.Reservation || mongoose.model("Reservation", reservationSchema);

export default Reservation;
