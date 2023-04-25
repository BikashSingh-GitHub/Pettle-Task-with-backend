import "./home.css";
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <div className="calendar-container">
        <Calendar localizer={localizer} events={[]} defaultDate={new Date()} />
      </div>
      <ul className="list-view">
        <li className="booking-card">
          <div className="booking-header">
            <div className="booking-image">
              <img src="https://via.placeholder.com/150x150" alt="Booking" />
            </div>
            <div className="booking-dates">
              <span>01/01/2021 - 01/02/2021</span>
              <span>All</span>
              <span>Upcoming</span>
              <span>Check-in</span>
              <span>Monk & Sagar</span>
            </div>
            <div className="booking-status">
              <span>50%</span>
              <span>Check-In</span>
              <span>13/28 tasks</span>
              <span>Check-Out</span>
            </div>
          </div>
        </li>
        <li className="booking-card">
          <div className="booking-header">
            <div className="booking-image">
              <img src="https://via.placeholder.com/150x150" alt="Booking" />
            </div>
            <div className="booking-dates">
              <span>01/01/2021 - 01/02/2021</span>
              <span>All</span>
              <span>Upcoming</span>
              <span>Check-in</span>
              <span>Jerry & shrey</span>
            </div>
            <div className="booking-status">
              <span>50%</span>
              <span>Check-In</span>
              <span>24/48 tasks</span>
              <span>Check-Out</span>
            </div>
          </div>
        </li>
        <li className="booking-card">
          <div className="booking-header">
            <div className="booking-image">
              <img src="https://via.placeholder.com/150x150" alt="Booking" />
            </div>
            <div className="booking-dates">
              <span>13/12/2022 - 15/12/2022</span>
              <span>All</span>
              <span>Upcoming</span>
              <span>Check-in</span>
              <span>Emmy & Gaurang</span>
            </div>
            <div className="booking-status">
              <span>50%</span>
              <span>Check-In</span>
              <span>24/48 tasks</span>
              <span>Check-Out</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Home;

