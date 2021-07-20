import React from "react";

// CSS file
import "./Contact.css";
import img1 from '../../assets/images/Contact/contact-png.png';

function Contact() {
  return (
    /*<div>
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
    </div>*/
    <div>

<section className="contact" id="contact">

<div className="image">
    <img src="images/contact-img.png" alt=""/>
</div>

<form action="">

    <h1 className="heading">contact us</h1>

    <div className="inputBox">
        <input type="text" required/>
        <label>name</label>
    </div>

    <div className="inputBox">
        <input type="email" required/>
        <label>email</label>
    </div>

    <div className="inputBox">
        <input type="number" required/>
        <label>phone</label>
    </div>

    <div className="inputBox">
        <textarea required name="" id="" cols="30" rows="10"></textarea>
        <label>message</label>
    </div>

    <input type="submit" className="btn" value="send message"/>

</form>

</section>

     </div>
    
  );
}

export default Contact;
