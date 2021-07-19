import React from "react";
import { useState } from "react";
import axios from "axios";
// import { Link } from 'react-dom' ;

// CSS file
import "./StaffRegister.css";

function StaffRegister() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNic] = useState("");
  const [roleId, setRoleId] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const registerStaff = () => {
    // console.log(phoneNumber);
    // console.log(password);

    axios
      .post("http://localhost:4000/user/registerStaff", {
        phoneNumber: phoneNumber,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName,
        nic: nic,
        roleId: roleId,
        address: address,
        passwordCheck: passwordCheck,
      })
      //   console.log("Inside register Staff function")
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

  // UI of registration of delivery Staff
  return (
    <div>
      {/* <h1>This is Delivery Staff Register</h1> */}
      <div className="form_wrapper_Register">
        <div className="form_container_Register">
          <div className="title_container_Register">
            <h2>Registration of a Staff Member</h2>
          </div>
          <div className="row_Register clearfix_Register">
            <div className="">
              <form>
                <div className="full_name_Register">
                  <div className="inputField_Register">
                    {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-envelope"></i>
                    </span>
                    <input
                      className="input_halfRegister"
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="inputField_Register">
                    {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-envelope"></i>
                    </span>
                    <input
                      className="input_halfRegister"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="inputField_Register">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    className="input_Register"
                    type="text"
                    name="address"
                    placeholder="Residence Address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>

                <div className="inputField_Register">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    className="input_Register"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="full_name_Register">
                  <div className="inputField_Register">
                    {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-envelope"></i>
                    </span>
                    <input
                      className="input_halfRegister"
                      type="text"
                      name="nic"
                      placeholder="National ID"
                      onChange={(e) => {
                        setNic(e.target.value);
                      }}
                    />
                  </div>

                  <div className="inputField_Register">
                    {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-envelope"></i>
                    </span>
                    <input
                      className="input_halfRegister"
                      type="text"
                      name="roleId"
                      placeholder="Role ID"
                      onChange={(e) => {
                        setRoleId(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="inputField_Register">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    className="input_Register"
                    type="text"
                    name="phoneNumber"
                    placeholder="Contact Number"
                    pattern="[0]{1}[7]{1}[0-9]{8}"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
                <div className="full_name_Register">
                  <div className="inputField_Register">
                    {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-lock"></i>
                    </span>
                    <input
                      className="input_halfRegister"
                      type="text"
                      name="password"
                      placeholder="Password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="inputField_Register">
                    {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-lock"></i>
                    </span>
                    <input
                      className="input_halfRegister"
                      type="text"
                      name="password_check"
                      placeholder="Re-type Password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      onChange={(e) => {
                        setPasswordCheck(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <p className="smallTextRegister">
                  Password must contain at least a <b> number</b> ,
                  <b>uppercase letter</b> , <b>lowercase letter</b> and{" "}
                  <b>8 or more characters</b>
                </p>

                {/* <div className="checkbox_Register">
                  <input type="checkbox" id="cb1" />
                  <label>I accept the Terms and Conditions</label>
                </div> */}

                <button
                  className="button_Register"
                  type="submit"
                  onClick={registerStaff}
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

export default StaffRegister;
