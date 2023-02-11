import React from "react";

function Booking() {
  return (
    <main className="booking-main">
      <div className="booking-inputs">
        <p className="tittle">Book a Consultation with us</p>
        <div className="inputs">
          <div className="input-div">
            {" "}
            <input
              type="text"
              placeholder="Enter your full name"
              className="input"
            />
          </div>

          <div className="input-div">
            <input
              type="text"
              placeholder="Enter your work email"
              className="input"
            />
          </div>

          <div className="input-div">
            <input type="text" placeholder="Mobile Number" className="input" />
          </div>

          <div className="input-div">
            <input type="text" placeholder="Company Name" className="input" />
          </div>

          <div className="input-div">
            <input type="text" placeholder="Select Country" className="input" />
          </div>

          <div className="input-div message">
            <input
              type="text"
              placeholder="Drop your message....."
              className="input "
            />
          </div>
        </div>
        <div className="send-request">
          <button className="send"> Send Rquest</button>
        </div>
      </div>
    </main>
  );
}

export default Booking;
