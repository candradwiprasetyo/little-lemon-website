import React, { useState } from "react";

const Message = ({ setMessageOpen }) => {

  const closePopup = () => {
    setMessageOpen(false)
  }
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-300 opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="relative p-16 text-xl font-bold text-green-500 bg-white rounded-lg shadow-lg">
          <div 
            className="absolute flex items-center justify-center w-8 h-8 font-bold text-white bg-gray-700 rounded-full cursor-pointer right-3 top-3"
            onClick={closePopup}
          >X</div>
          Thank you. Your reservation will be processed immediately.
        </div>
      </div>
    </>
  );
};

export default Message;
