import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  /*Web3Forms code start*/

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "79f026f5-caef-4947-bbef-8b2d121cae08");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      const name = formData.get("name");
      alert(
        `Thanks for the message ${name}. I will send reply to your email ASAP`
      );
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  /*Web3Forms code end*/

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img alt="" src={theme_pattern} />
      </div>
      <div className="contact-section">
        <div className="contact-section-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img alt="" src={mail_icon} />
              <p>chanduvcs538@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img alt="" src={call_icon} />
              <p>+91 8688329615</p>
            </div>
            <div className="contact-detail">
              <img alt="" src={location_icon} />
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>
        {/* <div className="contact-section-right"> */}
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />

          <label>Write your message here </label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          />

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Contact;
