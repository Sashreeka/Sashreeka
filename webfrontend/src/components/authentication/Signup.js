import React from "react";
// import { Link } from 'react-dom' ;
// CSS file
import "./Signup.css";

function Signup() {
  return (
    <div>
      <h1>This is Signup page</h1>
      <div className="container">
        <form action="register">
          <h3> Register with Us </h3>
          <p>
            Get started by creating a new account. You will be able to access
            our online market, try out mobile app, get instant notifications and
            much more.
          </p>

          <div className="row">
            <div className="one-half column">
              <label for="first_name"> First Name </label>
              <input
                className="u-full-width"
                type="text"
                placeholder="Sam"
                name="first_name"
                required
                maxlength="255"
              />
            </div>
            <div className="one-half column">
              <label for="last_name"> Last Name </label>
              <input
                className="u-full-width"
                type="text"
                placeholder="Perera"
                name="last_name"
                required
                maxlength="255"
              />
            </div>
          </div>
          <div className="row">
            <label for="address"> Address </label>
            <input
              className="u-full-width"
              type="text"
              placeholder="123, Kandy Road, Colombo."
              name="address"
              id="address"
              required
              maxlength="400"
            />
          </div>
          <div class="row">
            <div className="one-half column">
              <label for="dob"> Date of Birth </label>
              <input
                className="u-full-width"
                type="date"
                name="dob"
                id="dob"
                required
                max="9999-12-12"
              />
            </div>
            <div className="one-half column">
              <label for="gender"> Gender </label>
              <select
                className="u-full-width"
                name="gender"
                id="gender"
                required
              >
                <option value="M"> Male </option>
                <option value="F"> Female </option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="eight columns">
              <p>
                By signing up, you agree to our
                <a href="#" target="_blank">
                  Terms of Service
                </a>
                and have read and acknowledge our
                <a href="#" target="_blank">
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="four columns">
              <input
                className="button-primary"
                type="submit"
                name="register"
                value="Sign Up"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
