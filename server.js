const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema for bookings collection
const bookingSchema = new mongoose.Schema({
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  title: { type: String, required: true },
  number: { type: Number, required: true },
});

// Create Booking model using the schema
const Booking = mongoose.model('Booking', bookingSchema);

const handleBooking = async () => {
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
    // Insert booking data into MongoDB database
    await Booking.create(booking);
    setBookings([...bookings, booking]);
    alert("Booking successful!");
  } else {
    alert("Booking slot is not available. Please choose a different slot.");
  }
};
