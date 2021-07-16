import React from 'react';
import './Home.css';
// import img1 from '../../assests/images/Home/back-img-1.png'
import img1 from '../../assets/images/Home/backImg1.png';
 
function Home() { 
    return(
        <div>
        <div className="container">
        <h1>Welcome to Shashreeka</h1>
        <h3>The Best Online Organic Fertilizer Market</h3>
        <p>Shashreeka recognized that the growing demand for organic <br/>crop farming required an <br/> increased focus on providing an all-natural solution to boost soil nutrition.
         Rather than make <br/>unproven claims about our fertilizer, we focus on education,<br/>testing, and proper use to document results. This process may be<br/> slower, but it ensures that we support the growth of <br/>
        sustainable agriculture around the world.
         </p>
         <div className="home-hero-img-wrapper">
         
         <img src={img1} className="home-hero-img"/>
         </div>

        </div>
        </div>
    
    )
}

export default Home;