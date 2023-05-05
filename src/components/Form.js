import React, { useState } from "react";
import axios from "axios";
import './form.css';

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, email, phone, date, time };
    axios.post("http://localhost/pettle/addBookings.php", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Phone:</label>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <label>Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <label>Time:</label>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />

      <button type="submit">Book Slot</button>
    </form>
  );
}

export default Form;
