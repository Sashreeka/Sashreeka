import React from "react";

// CSS file
import "./Contact.css";

function Contact() {
  return (
    <div>
      <h1>This is contact page</h1>
      <div className="content">
        <form action="#">
          <label for="contact_name">Name</label>
          <input
            className="u-full-width"
            type="text"
            id="contact_name"
            name="contact name"
            required
          />
          <label for="contact_email"> E-mail</label>
          <input
            className="u-full-width"
            type="email"
            id="contact_email"
            name="contact email"
          />
          <label for="contact_message">Message</label>
          <textarea
            className="u-full-width"
            id="contact_message"
            name="contact message"
            required
          ></textarea>
          <input className="button" type="submit" value="send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
