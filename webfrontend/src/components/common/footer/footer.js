import React from "react";
import "../footer/footer.css";
import playstore from "../../../assets/images/google_playstore.png";

function Footer() {
  return (
    <div>
      <footer className="page-footer">
        <div className="bg-dark">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-md-12 text-center">
              <a href="">
                <i class="fab fa-facebook text-white"></i>
              </a>
              <a href="">
                <i class="fab fa-twitter text-white"></i>
              </a>
              <a href="">
                <i class="fab fa-google-plus-g text-white"></i>
              </a>
              <a href="">
                <i class="fab fa-linkedin-in text-white"></i>
              </a>
              <a href="">
                <i class="fab fa-instagram text-white"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-part2">
          <div className="container text-center text-md-left">
            <div className="row">
              <div className="col-md-3 mx-auto md-4">
                <h4 className="text-uppercase font-weight-bold">Sashreeka</h4>
                <hr className="undertopic"></hr>
                <p className="mt-2">
                Sashreeka recognized that the growing demand for organic crop
            farming required an increased focus on providing an all-natural
            solution to boost soil nutrition. Rather than make unproven claims
            about our fertilizer, we focus on education,testing, and proper use
            to document results. 
                </p>
              </div>

              <div className="col-md-3 mx-auto md-4">
                <h4 className="text-uppercase font-weight-bold">
                  Our Services
                </h4>
                <hr className="undertopic"></hr>
                <ul className="list-unstyled">
                  <li className="my-2">
                    <a href="/">Home</a>
                  </li>
                  <li className="my-2">
                    <a href="./about">About Us</a>
                  </li>
                  <li className="my-2">
                    <a href="#">Services</a>
                  </li>
                  <li className="my-2">
                    <a href="#">Features</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mx-auto md-4">
                <h4 className="text-uppercase font-weight-bold">Quick Links</h4>
                <hr className="undertopic"></hr>
                <ul className="list-unstyled">
                  <li className="my-3">
                    <a href="./store">Organic Fertilizer shop</a>
                  </li>
                  <li className="my-3">
                    <a href="./fertilizer">Organic Fertilizer Hand book</a>
                  </li>
                  <li className="my-3">
                    {/* Directs to delivery Agent Registration */}
                    <a href="/regAgent">Get started as a Delivery Agent</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mx-auto md-4">
                <h4 className="text-uppercase font-weight-bold">
                  Download Apps
                </h4>
                <hr className="undertopic"></hr>
                <ul className="list-unstyled">
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
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footerlast">
          <span>copyright@sashreeka.developers.ORG</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
