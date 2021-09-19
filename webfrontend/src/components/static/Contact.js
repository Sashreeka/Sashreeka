import React, { useState } from "react";
import "./Contact.css";
import contactImg1 from "../../assets/images/Contact/contact5.jpg";
import axios from "axios";
//import { userSchema } from "./validations/UserValidation";
//import * as yup from "yup";
//import {formik From}  from "formik";

import Navigation from "../../components/common/header/Navigation";
import Footer from "../../components/common/footer/footer";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    massage: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const onSubmit = () => {
    axios
      .post("http://localhost:4000/user/contactus", { values })
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log("fail", err);
      });
  };

  return (
    <div>
      <Navigation />
      <div className="mainSection">
        <section className="contact" id="contact">
          <div className="leftSection">
            <div className="contact-details">

            <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">1/25,Temple Road</div>
          <div class="text-two">Kottawa</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+9411 4235888</div>
          <div class="text-two">+9411 4235889</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">sashreeka@gmail.com</div>
          
        </div>
              {/*<img src={contactImg1} />*/}
            </div>

            <div class="mapouter">
              <iframe src="https://maps.google.com/maps?q=No%2035%20Reid%20Avenue%20Colombo%207%20&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
          </div>

          <div className="formSection">
            <form action="">
              <h1 className="contact-heading">Send us a message</h1>
              <div className="contact-inputBox">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={values.name}
                  onChange={handleInputChange}
                  required
                />
                
              </div>

              <div className="contact-inputBox">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  required
                />
                
              </div>

              <div className="contact-inputBox">
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={values.phone}
                  onChange={handleInputChange}
                  required
                />
                
              </div>

              <div className="contact-inputBox">
                <textarea
                  required
                  name=""
  
                  id=""
                  cols="30"
                  rows="10"
                  name="massage"
                  placeholder="Enter your massage"

                  value={values.massage}
                  onChange={handleInputChange}
                ></textarea>
                
              </div>
              
              <div className="contact-button">
              <input
                type="submit"
                className="contactbtn"
                value="Send"
                onclick={onSubmit}
              />
              </div>
              
              <a href="./Complaints">
                <button className="cmpbtn">Complaints ?</button>
              </a>
             {/*  <div className="complaints-button">
                <a href="./Complaints">
                  <button >Complaint</button>
                </a>
              </div> */}
              
             
            
            </form>
            
          
         </div>
          
        </section>
      </div>
      
          
      <Footer />
    </div>
  );
}

export default Contact;
