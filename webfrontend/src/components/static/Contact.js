import React from "react";

// CSS file
import "./Contact.css";
import contactImg1 from '../../assets/images/Contact/contact3.png';

function Contact() {
  return (
    

<div>
<section className="contact" id="contact">

<div className="image">
    <img src={contactImg1}/>
</div>
<div className="formSection"> 
<form action="">

    <h1 className="heading">Contact Us</h1>

    <div className="inputBox">
        <input type="text" required/>
        <label>Your Name</label>
    </div>

    <div className="inputBox">
        <input type="email" required/>
        <label>Your Email</label>
    </div>

    <div className="inputBox">
        <input type="number" required/>
        <label>Phone</label>
    </div>

    <div className="inputBox">
        <textarea required name="" id="" cols="30" rows="10"></textarea>
        <label>Message</label>
    </div>

    <input type="submit" className="contactbtn" value="Send"/>

</form>
</div>
</section>


</div>
    
  );
}

export default Contact;
