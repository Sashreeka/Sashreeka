import React from "react";
import { useState } from "react";
import axios from "axios";
// import { Link } from 'react-dom' ;

// CSS file
import "./DeliveryAgentRegister.css";

function DeliveryAgentRegister() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setpassword] = useState("");

  const registerAgent = () => {
    console.log(phoneNumber);
    console.log(password);

    axios
      .post("http://localhost:4000/user/registerAgent", {
        phoneNumber: phoneNumber,
        password: password,
      })
      //   console.log("Inside register agent function")
      .then((response) => {
        // console.log(response.data.token);
        // console.log(response.data.message);
        console.log(response);
        // console.log(response.data[0].userCategory);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // UI of registration of delivery agent
  return (
    <div>
      {/* <h1>This is Delivery Agent Register</h1> */}
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Register as a Delivery Agent</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="phoneNumber"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                </div>
                {/* <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Re-type Password"
                    required
                  />
                </div> */}

                {/* <div className="input_field checkbox_option">
                  <input type="checkbox" id="cb1" />
                  <label for="cb1">I agree with terms and conditions</label>
                </div> */}

                <button
                  className="button"
                  type="submit"
                  onClick={registerAgent}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAgentRegister;
