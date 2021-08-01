import React from "react";
import "./About.css";
//import about1 from '../../assets/images/About/about1.jpg';

import Navigation from "../../components/common/header/Navigation";
import Footer from "../../components/common/footer/footer";

import ProImg1 from "../../assets/images/About/profile images/img1.jpeg";
import ProImg2 from "../../assets/images/About/profile images/img2.jpeg";
import ProImg3 from "../../assets/images/About/profile images/img3.jpg";
import ProImg4 from "../../assets/images/About/profile images/img4.jpg";
import ProImg5 from "../../assets/images/About/profile images/img5.jpeg";


function About() {
  return (
    <div>
      <Navigation />
      <section className="about" id="about">
        {/*<h1 className="heading">Shashreeka</h1>
<h3 className="title">The Best Online Organic Fertilizer Market</h3>*/}

        <div className="row">
          <div className="aboutContent">
            <h3>About Us</h3>
            <p>
              Established in 2021, we are a company devoted to sustainable,
              organic and fair trade way of life. Starting out as a family owned
              business based in Kandy, this company has grown to be one of the
              world leaders in biodynamic, organic and fair-trade agriculture.
              We have always believed in clean, agrochemically uncontaminated
              produce the way nature makes it. Even our fertilizer is certiﬁed
              organic, so that we can leave behind clean air, water and soil for
              all living things, present and future. In addition, from its very
              inception, Bio Foods also ensured fair trade standards to take
              care of our farmers from ﬂuctuating market prices and middle-man
              exploitation. This is what makes us leaders in modern sustainable
              agriculture. Due to his commitment towards this vision and ethical
              standing, the founder and the chairman of Bio Foods, Dr. Sarath
              Ranaweera, won the ﬁrst ever “World’s Fairest Fairtrader Award”,
              presented by the World Fairtrade Labelling Organization (FLO) in
              2014. Now celebrating our 25th anniversary (2018), we are leading
              exporters of beautiful tea, spices and coconut products, with
              exciting plans to bring our truly organic way of life to more and
              more beautiful people.
            </p>
            <a href="#">
              <button className="aboutbtn">Read More</button>
            </a>
          </div>

          {/*} <div className="image">
        <img src={about1} />
    </div>*/}
        </div>
      </section>

      <section id="aboutStaff" class="aboutStaff">
        <h1 className="heading">Our Team</h1>
        <h3 className="title">Meet Our Team</h3>

        <div className="about-card-container">
          <div className="about-card">
            <img src={ProImg1} />
            <h3>Ishan Reshmika</h3>
            <p>CEO</p>
          </div>

          <div className="about-card">
            <img src={ProImg2} />
            <h3>Anuki De Alwis</h3>
            <p>COO</p>
          </div>

          <div className="about-card">
            <img src={ProImg3} />
            <h3>Sanduni Fernando</h3>
            <p>Manager</p>
          </div>

          <div className="about-card">
            <img src={ProImg4} />
            <h3>Chamodhi Dewwandi</h3>
            <p>Marketing Manager</p>
          </div>

          <div className="about-card">
            <img src={ProImg5} />
            <h3>Shamali Pathirana</h3>
            <p>Controller</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
