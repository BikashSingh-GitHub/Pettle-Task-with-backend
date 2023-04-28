import "./home.css";
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

const Home = () => {
  const [products, setProducts] = useState([]);
  const [bookingStart, setBookingStart] = useState("");
  const [bookingEnd, setBookingEnd] = useState("");
  const [bookingName, setBookingName] = useState("");
  const [bookingNumber, setBookingNumber] = useState("");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleBooking = (e) => {
    e.preventDefault();
    const booking = {
      start: new Date(bookingStart),
      end: new Date(bookingEnd),
      title: bookingName,
      number: bookingNumber,
    };
  
    const isAvailable = bookings.every((item) => {
      const itemStart = moment(item.start);
      const itemEnd = moment(item.end);
      const bookingStartMoment = moment(booking.start);
      const bookingEndMoment = moment(booking.end);
  
      return (
        bookingStartMoment.isBefore(itemStart) ||
        bookingStartMoment.isSame(itemStart) ||
        bookingEndMoment.isAfter(itemEnd) ||
        bookingEndMoment.isSame(itemEnd)
      );
    });
  
    if (isAvailable) {
      setBookings([...bookings, booking]);
      setBookingStart("");
      setBookingEnd("");
      setBookingName("");
      setBookingNumber("");
      alert("Booking successful!");
    } else {
      alert("Booking slot is not available. Please choose a different slot.");
    }
  };
  
  
  return (
    <div className="container">
     
        <div className="booking-box">
          <h2><u><b>Book a slot</b></u></h2>
          <form onSubmit={handleBooking}>
            <div className="form-group">
              <label htmlFor="start">Start date/time:</label>
              <input
                type="datetime-local"
                id="start"
                name="start"
                required
                value={bookingStart}
                onChange={(e) => setBookingStart(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="end">End date/time:</label>
              <input
                type="datetime-local"
                id="end"
                name="end"
                required
                value={bookingEnd}
                onChange={(e) => setBookingEnd(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={bookingName}
                onChange={(e) => setBookingName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Number of people:</label>
              <input
                type="number"
                id="number"
                name="number"
                min="1"
                required
                value={bookingNumber}
                onChange={(e) => setBookingNumber(e.target.value)}
              />
            </div>
            <button type="submit">Book now</button>
          </form>
        </div>
      
        <ul className="list-view">
  {bookings.map((booking) => (
    <li className="booking-card" key={booking._id}>
      <div className="booking-header">
        <div className="booking-image">
          <img src="https://via.placeholder.com/150x150" alt="Booking" />
        </div>
        <div className="booking-dates">
          <span>{booking.start.toDateString()} - {booking.end.toDateString()}</span>
          <span>All</span>
          <span>Upcoming</span>
          <span>Check-in</span>
          <span>{booking.title}</span>
        </div>
        <div className="booking-status">
          <span>50%</span>
          <span>Check-In</span>
          <span>13/28 tasks</span>
          <span>Check-Out</span>
        </div>
      </div>
    </li>
  ))}
</ul>

</div>
);
};

export default Home;
