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
            <div className="contact-image">
              <img src={contactImg1} />
            </div>

            <div class="mapouter">
              <iframe src="https://maps.google.com/maps?q=No%2035%20Reid%20Avenue%20Colombo%207%20&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
          </div>

          <div className="formSection">
            <form action="">
              <h1 className="contact-heading">Contact Us</h1>
              <div className="contact-inputBox">
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleInputChange}
                  required
                />
                <label>Your Name</label>
              </div>

              <div className="contact-inputBox">
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  required
                />
                <label>Your Email</label>
              </div>

              <div className="contact-inputBox">
                <input
                  type="number"
                  name="phone"
                  value={values.phone}
                  onChange={handleInputChange}
                  required
                />
                <label>Phone</label>
              </div>

              <div className="contact-inputBox">
                <textarea
                  required
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  name="massage"
                  value={values.massage}
                  onChange={handleInputChange}
                ></textarea>
                <label>Message</label>
              </div>

              <input
                type="submit"
                className="contactbtn"
                value="Send"
                onclick={onSubmit}
              />
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
