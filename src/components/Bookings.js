import React, { useEffect, useState } from "react";
import axios from "axios";
import './bookings.css';
import Booking from './Booking'; // import the Booking component

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get("http://localhost/pettle/getBookings.php");
      setBookings(response.data.bookings);
    };
    fetchBookings();
  }, []);

  return (
    <table>
      <thead>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Date</th>
    <th>Time</th>
  </tr>
</thead>

      <tbody>
        {bookings?.map((booking) => {
          return (
            <Booking key={booking.id} booking={booking} />
          );
        })}
      </tbody>
    </table>
  );
}

export default Bookings;
