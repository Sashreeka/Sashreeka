import React from "react";
import "./Contact.css";
import contactImg1 from '../../assets/images/Contact/contact5.jpg';

function Contact() {
  return (
    <div>
    <div className="mainSection">
        <section className="contact" id="contact">
            <div className="leftSection">
                <div className="contact-image">
                    <img src={contactImg1}/>
                </div>

                <div class="mapouter">
                    <iframe src="https://maps.google.com/maps?q=No%2035%20Reid%20Avenue%20Colombo%207%20&t=&z=15&ie=UTF8&iwloc=&output=embed" >
                    </iframe>
                </div>
            </div>

            <div className="formSection"> 
                <form action="">
                    <h1 className="contact-heading">Contact Us</h1>
                    <div className="contact-inputBox">
                        <input type="text" required/>
                        <label>Your Name</label>
                    </div>

                    <div className="contact-inputBox">
                        <input type="email" required/>
                        <label>Your Email</label>
                    </div>

                    <div className="contact-inputBox">
                        <input type="number" required/>
                        <label>Phone</label>
                    </div>

                    <div className="contact-inputBox">
                        <textarea required name="" id="" cols="30" rows="10"></textarea>
                        <label>Message</label>
                    </div>

                    <input type="submit" className="contactbtn" value="Send"/>

                </form>
            </div>

        </section>
    </div>
    </div>
    
  );
}

export default Contact;
