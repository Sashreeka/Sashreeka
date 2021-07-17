import React from 'react';
import './Home.css';
// import img1 from '../../assests/images/Home/back-img-1.png'
import img1 from '../../assets/images/Home/back-img-1.jpg';
 
function Home() { 
    return(
        
               <div className="hero" >
               <div class="row">
               <div class="col1-1"></div>
               <h1 className="hed1">Welcome to Shashreeka</h1>

                         <h3 className="hed2">The Best Online Organic Fertilizer Market</h3>
                         <p>Shashreeka recognized that the growing demand for organic <br/>crop farming required an <br/> increased focus on providing an all-natural solution to boost soil nutrition.
                           Rather than make <br/>unproven claims about our fertilizer, we focus on education,<br/>testing, and proper use to document results. This process may be<br/> slower, but it ensures that we support the growth of <br/>
                           sustainable agriculture around the world.
                         </p>
                         
                        <a  class="link1" href="">Get Started</a>
                        
                   </div>
                   <div className="col-2">     
    

                        <img src={img1} className="home-hero-img"/>
                        </div>
                        
                    </div>
               
            
        
    );
}

export default Home;