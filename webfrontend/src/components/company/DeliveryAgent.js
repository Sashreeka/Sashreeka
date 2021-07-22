//Delivery Agent Dashboard
import React from "react";
import playstore from "../../assets/images/google_playstore.png";

function DeliveryAgent() {
  return (
    <div className="">
      <h1>Our story</h1>
      <p>
        What started as an ambitious idea is now the leading local delivery
        company. Delivery Hero is present in over 50 countries across four
        continents and is on a mission to deliver anything, straight to
        customers’ doors.
      </p>

      <h4 className="text-uppercase font-weight-bold">Download Apps</h4>
      <hr className="undertopic"></hr>
      {/* <ul className="list-unstyled"> */}
      <li className="my-2">
        <a href="#">
          <img src="" />
          Farmer App
        </a>
      </li>
      <li className="my-2">
        <a href="#">
          <img src="" />
          Delivery Agent App
        </a>
      </li>
      <li className="my-2">
        <a href="#">
          <img src={playstore} />
        </a>
      </li>
    </div>
  );
}

export default DeliveryAgent;
