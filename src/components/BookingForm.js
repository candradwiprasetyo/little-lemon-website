import React, { useState } from "react";
import Message from './Message'

const BookingForm = ({ name, email, phone, time, date, setName, setEmail, setPhone, setTime, setDate }) => {

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorTime, setErrorTime] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);

  const handleChange = (type, value) => {
    switch(type) {
      case 'name': 
        setName(value)
        setErrorName((!value) ? true : false)
      break;
      case 'email': 
        setEmail(value)
        setErrorEmail((!value) ? true : false) 
      break;
      case 'phone': 
        setPhone(value)
        setErrorPhone((!value) ? true : false) 
      break;
      case 'date': 
        setDate(value)
        setErrorDate((!value) ? true : false) 
      break;
      case 'time': 
        setTime(value)
        setErrorTime((!value) ? true : false) 
      break;
    }
  }

  const handleSubmit = (e) => {

    let errorCount = 0;
    setErrorName((!name) ? true : false)
    setErrorEmail((!email) ? true : false)
    setErrorPhone((!phone) ? true : false)
    setErrorDate((!date) ? true : false)
    setErrorTime((!time) ? true : false)

    if (errorName || name == '') { errorCount++ }
    if (errorEmail  || email == '') { errorCount++ }
    if (errorPhone  || phone == '') { errorCount++ }
    if (errorDate  || date == '') { errorCount++ }
    if (errorTime  || time == '') { errorCount++ }

    console.log(errorCount)
    console.log(errorName, name)
    
    if (errorCount === 0) {
      setMessageOpen(true)
    }
    
    e.preventDefault();
  };

  return (
    <div>
      {messageOpen && (
        <Message setMessageOpen={setMessageOpen} />
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="py-5 text-lg font-bold ">Table booking details</h1>
          <div className="flex flex-col justify-start">
            <div className="form-control lg:w-[450px] mt-3 max-w-xs">
              <label className="mb-2 font-semibold text-start">Name</label>

              <input
                name="name"
                onChange={(e) => handleChange('name', e.target.value)}
                type="text"
                placeholder="Name"
                className="w-full max-w-xs input input-bordered"
                value={name}
              />
              {errorName && (
                <div className="text-left text-red-500">Required</div>
              )}
            </div>
            <div className="form-control lg:w-[450px] mt-3 max-w-xs">
              <label className="mb-2 font-semibold text-start">Email</label>
              <input
                name="email"
                onChange={(e) => handleChange('email', e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full max-w-xs input input-bordered"
              />
              {errorEmail && (
                <div className="text-left text-red-500">Required</div>
              )}
            </div>
            <div className="form-control lg:w-[450px] mt-3 max-w-xs">
              <label className="mb-2 font-semibold text-start">Date</label>

              <input
                name="date"
                onChange={(e) => handleChange('date', e.target.value)}
                type="date"
                placeholder="Phone no:"
                className="w-full max-w-xs input input-bordered"
              />
              {errorDate && (
                <div className="text-left text-red-500">Required</div>
              )}
            </div>
            <div className="form-control lg:w-[450px] mt-3 max-w-xs">
              <label className="mb-2 font-semibold text-start">
                Phone Number
              </label>

              <input
                onChange={(e) => handleChange('phone', e.target.value)}
                name="phone"
                type="text"
                placeholder="Phone no:"
                className="w-full max-w-xs input input-bordered"
              />
              {errorPhone && (
                <div className="text-left text-red-500">Required</div>
              )}
            </div>
            <div className="form-control lg:w-[450px] mt-3 max-w-xs">
              <label className="mb-2 font-semibold text-start">Time</label>

              <input
                onChange={(e) => handleChange('time', e.target.value)}
                name="time"
                value={time}
                type="time"
                placeholder="Time:"
                className="w-full max-w-xs input input-bordered"
              />
              {errorTime && (
                <div className="text-left text-red-500">Required</div>
              )}
            </div>

            <button className="my-4 btn btn-base">Book now</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
