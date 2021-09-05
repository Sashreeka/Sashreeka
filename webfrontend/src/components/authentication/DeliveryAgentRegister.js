import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import axios from "axios";

//header and footer components
import Navigation from "../../components/common/header/Navigation";
import Footer from "../../components/common/footer/footer";

export default function DeliverAgentRegister() {
  // const [phoneNumberList, setPhoneNumberList] = useState([]);

  // getting the pgone numbers by an array
  // useEffect(() => {
  //   axios.get("http://localhost:4000/user/getPhoneNumber").then((response) => {
  //     console.log(response.data);
  //     setPhoneNumberList(response.data);
  //     // const finalResult = phoneNumberList.find((item) => {
  //     //   return item.phoneNumber === "0713705751";
  //     // });
  //     // console.log(finalResult);
  //   });
  // }, []);

  // const checkPhoneNum = (num) => {
  //   phoneNumberList.find((item) => {
  //     return item.phoneNumber === num;
  //   });
  // };

  const validate = Yup.object({
    firstName: Yup.string()
      //   .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      //   .max(20, "Must be 20 characters or less")
      .required("Required"),
    address: Yup.string()
      //   .max(20, "Must be 20 characters or less")
      .required("Required"),
    // nic: Yup.string()
    // // .equals(10, "Must be 10 characters")
    // .required("Required"),
    // drivingLicence: Yup.string()
    //   // .equals(9, "Must be 9 characters")
    //   .required("Required"),
    phoneNumber: Yup.string()
      .matches("[0]{1}[7]{1}[0-9]{8}", "Phone Number is not Valid")
      //   .max(20, "Must be 20 characters or less")
      // .checkPhoneNum("0713705751")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 charaters")
      .matches(
        "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        address: "",
        // nic: "",
        // drivingLicence: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        // if (checkPhoneNum(values.phoneNumber) === false) {
        //   alert("Please enter a different phone number.");
        // } else {
        //alert(values.phoneNumber);
        axios
          .post("http://localhost:4000/user/registerAgent", {
            phoneNumber: values.phoneNumber,
            password: values.password,
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            // nic: values.nic,
            // drivingLicence: values.drivingLicence,
            address: values.address,
            passwordCheck: values.passwordCheck,
          })
          //   console.log("Inside register agent function")
          .then((response) => {
            window.location.href = "./signin";
            // console.log(response.data.token);
            // console.log(response.data.message);
            //console.log(response);
            // console.log(response.data[0].userCategory);
          })
          .catch((error) => {
            console.log(error);
          });
        // }

        // console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <Navigation />
          <div className="form_wrapper_Register">
            <div className="form_container_Register">
              <div className="title_container_Register">
                <h2>Registration of a Delivery Agent</h2>
              </div>
              <div className="row_Register clearfix_Register">
                <div className="">
                  <Form>
                    <div className="full_name_Register">
                      <div className="inputField_Register">
                        {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-envelope"></i>
                        </span>
                        <TextField
                          className="input_halfRegister"
                          // label="First Name"
                          name="firstName"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>

                      <div className="inputField_Register">
                        {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-envelope"></i>
                        </span>
                        <TextField
                          className="input_halfRegister"
                          placeholder="Last Name"
                          // label="last Name"
                          name="lastName"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="inputField_Register">
                      {" "}
                      <span>
                        <i aria-hidden="true" className="fa fa-envelope"></i>
                      </span>
                      <TextField
                        className="input_halfRegister"
                        placeholder="Address"
                        // label="address"
                        name="address"
                        type="text"
                      />
                    </div>
                    <div className="inputField_Register">
                      {" "}
                      <span>
                        <i aria-hidden="true" className="fa fa-envelope"></i>
                      </span>
                      <TextField
                        className="input_halfRegister"
                        placeholder="Email"
                        // label="Email"
                        name="email"
                        type="email"
                      />
                    </div>
                    {/* <div className="full_name_Register">
                      <div className="inputField_Register">
                        {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-envelope"></i>
                        </span>
                        <TextField
                          className="input_halfRegister"
                          // label="National ID"
                          name="nic"
                          type="text"
                          placeholder="National ID"
                        />
                      </div>

                      <div className="inputField_Register">
                        {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-envelope"></i>
                        </span>
                        <TextField
                          className="input_halfRegister"
                          // label="License ID"
                          name="drivingLicence"
                          type="text"
                          placeholder="License ID"
                        />
                      </div>
                    </div> */}
                    <div className="inputField_Register">
                      {" "}
                      <span>
                        <i aria-hidden="true" className="fa fa-envelope"></i>
                      </span>
                      <TextField
                        className="input_Register"
                        // label="Phone Number"
                        name="phoneNumber"
                        placeholder="Contact Numbe (07_ _ _ _ _ _ _ _)"
                        type="text"
                      />
                    </div>
                    <div className="full_name_Register">
                      <div className="inputField_Register">
                        {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-lock"></i>
                        </span>
                        <TextField
                          className="input_halfRegister"
                          placeholder="Password"
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                        {/* <input
                          className="input_halfRegister"
                          type="password"
                          name="password"
                          placeholder="Password"
                          // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          required
                          // onChange={(e) => {
                          //   setPassword(e.target.value);
                          // }}
                        /> */}
                      </div>
                      <div className="inputField_Register">
                        {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-lock"></i>
                        </span>
                        <TextField
                          className="input_halfRegister"
                          placeholder="Re-type Password"
                          // label="Confirm Password"
                          name="confirmPassword"
                          type="password"
                        />
                      </div>
                    </div>
                    <div>
                      <button className="button_Register" type="submit">
                        Register
                      </button>
                      {/* <button className="button_Reset" type="reset">
                        Reset
                      </button> */}
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </Formik>
  );
}
