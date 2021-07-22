import React from "react";

function Test() {
  return (
    <div>
      <div id="loginWindow" className="modal">
        <div className="modal-content animate">
          <div className="loginContainer">
            <label for="uname">
              <b>Username</b>
            </label>
            {/* <i className="fas fa-mobile-alt"></i> */}
            <input
              className="loginInput"
              type="text"
              name="phoneNumber"
              placeholder="phoneNumber"
              onChange={(e) => {
               // setPhoneNumber(e.target.value);
              }}
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              className="loginInput"
              type="text"
              name="password"
              placeholder="password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <button className="modalButton" onClick={login}>
              Sign In
            </button>
            {/* <Link className="signUp" to="/regFarmer" onClick={signup}>
              Sign Up
            </Link> */}

            <a href="/regFarmer">
              <button className="modalSignUp" onClick={signup}>
                Sign Up
              </button>
            </a>

            {/* </br> */}
            <Link className="psw" to="#">
              Forgot password?
            </Link>
            {/* <span className="psw">
              <a href="#"></a>
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
  // render() {

  //     const Logout =()=>{
  //       localStorage.clear();
  //       window.location.href='/';
  // }

  // const currentlogState = () => {
  //   if (window.localStorage.getItem("userCategory")) {
  //     console.log("logged in anuki");
  //   } else {
  //     console.log("logout");
  //   }
  // };

  // React.useEffect(()=>{
  //   if(window.localStorage.getItem("userCategory")){
  //         console.log("logged in");
  //   }else{
  //         console.log("logout");
  //   }
  // })
}

export default Test;
