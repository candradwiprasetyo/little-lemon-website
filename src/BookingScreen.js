import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BookingForm from './components/BookingForm'

const BookingScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  return (
    <div>
      <Navbar />
      <BookingForm
        name={name}
        email={email}
        phone={phone}
        time={time}
        date={date}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setTime={setTime}
        setDate={setDate}
      />
    </div>
  )
}

export default BookingScreen