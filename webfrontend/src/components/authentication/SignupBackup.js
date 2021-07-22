import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

import axios from "axios";

export default function SignupBackup() {
  const [phoneNumberList, setPhoneNumberList] = useState([]);

  // getting the pgone numbers by an array
  useEffect(() => {
    axios.get("http://localhost:4000/user/getPhoneNumber").then((response) => {
      console.log(response.data);
      setPhoneNumberList(response.data);
      // const finalResult = phoneNumberList.find((item) => {
      //   return item.phoneNumber === "0713705751";
      // });
      // console.log(finalResult);
    });
  }, []);

  const checkPhoneNum = (num) => {
    phoneNumberList.find((item) => {
      return item.phoneNumber === num;
    });
    alert(num);
    return true;
  };

  const validate = Yup.object({
    // firstName: Yup.string()
    //   //   .max(15, "Must be 15 characters or less")
    //   .required("Required"),
    // lastName: Yup.string()
    //   //   .max(20, "Must be 20 characters or less")
    //   .required("Required"),
    // address: Yup.string()
    //   //   .max(20, "Must be 20 characters or less")
    //   .required("Required"),
    // phoneNumber: Yup.string()
    //   .matches("[0]{1}[7]{1}[0-9]{8}", "Phone Number is not Valid")
    //   //   .max(20, "Must be 20 characters or less")
    //   // .checkPhoneNum("0713705751")
    //   .required("Required"),
    // email: Yup.string().email("Email is invalid").required("Email is required"),
    // password: Yup.string()
    //   .min(8, "Password must be at least 8 charaters")
    //   .required("Password is required")
    //   .matches(
    //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    //   ),
    // confirmPassword: Yup.string()
    //   .oneOf([Yup.ref("password"), null], "Password must match")
    //   .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        if (checkPhoneNum(values.phoneNumber) === false) {
          alert("Please enter a different phone number.");
        } else {
          alert(values.password);
          axios
            .post("http://localhost:4000/user/registerFarmer", {
              phoneNumber: values.phoneNumber,
              password: values.password,
              email: values.email,
              firstName: values.firstName,
              lastName: values.lastName,
              address: values.address,
              passwordCheck: values.passwordCheck,
            })
            //   console.log("Inside register agent function")
            .then((response) => {
              // console.log(response.data.token);
              // console.log(response.data.message);
              //console.log(response);
              // console.log(response.data[0].userCategory);
            })
            .catch((error) => {
              console.log(error);
            });
        }

        // console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Address" name="address" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Phone Number" name="phoneNumber" type="text" />
            <TextField label="password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button
              className="btn btn-dark mt-3"
              type="submit"
              // onClick={checkPhoneNum()}
            >
              Register
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
