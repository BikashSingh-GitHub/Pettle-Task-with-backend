import React from "react";
import "./booking.css";

function Booking({ booking }) {
  return (
    <tr className="booking-row">
      <td>{booking.id}</td>
      <td>{booking.name}</td>
      <td>{booking.email}</td>
      <td>{booking.phone}</td>
      <td>{booking.date}</td>
      <td>{booking.time}</td>
    </tr>
  );
}

export default Booking;
