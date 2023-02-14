import React from "react";
import Image from "next/image";

function Form() {
  return (
    <main className="form-main">
      <form className="inline">
        <div className="input-icon">
          <Image
            src="/images/person.svg"
            width={20}
            height={20}
            className="input-image"
          />
          <input
            className="input-field "
            type="text"
            placeholder="Tell us your name"
          />
        </div>

        <div className="input-icon">
          <Image
            src="/images/mail.svg"
            width={20}
            height={20}
            className="input-image"
          />
          <input
            className="input-field"
            type="text"
            placeholder="Enter your email address"
          />
        </div>

        <div className="button-div">
          <button className="form-button"> Get early access</button>
        </div>
      </form>
    </main>
  );
}

export default Form;
