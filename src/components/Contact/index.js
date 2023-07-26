import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      
      return;
    }

    if (!setMessage(message)) {
      setErrorMessage(`Message is required.`);
      return;
    }

    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Reach Out</h2>
      </div>

      <div className="contact-info">
        <div>
          <h3>Hello {userName}</h3>
          <p>Contact me!</p>
          <address>
            Toronto, ON <br />
            P: <a href="tel:951.310.5642">437-000-0000</a>
            <br />
            E:{" "}
            <a href="mailto://saloni.patel@gmail.com">
            saloni.patel@gmail.com
            </a>
          </address>
          <p>
            <strong>I'd love to hear your feedback!</strong>
          </p>
        </div>

        {/* contact form section  */}
        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form">
            {/* Name */}
            <label for="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            {/* Email */}
            <label for="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            {/* Message */}
            <label for="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;