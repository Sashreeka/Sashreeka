import React from 'react';
import './Home.css';
// import img1 from '../../assests/images/Home/back-img-1.png'
import img1 from '../../assets/images/Home/img1.jpg';
import img2 from '../../assets/images/Home/img2.jpeg';
import {Link} from 'react-router-dom'

function Home() { 
    return(
        
          <div className="home" >
              
            <div className="Container1">
              <h1>Welcome to Shashreeka</h1>
              <h3>The Best Online Organic Fertilizer Market</h3>
              <p>Shashreeka recognized that the growing demand for organic <br/>crop farming required an increased focus on providing <br/>an all-natural solution to boost soil nutrition.
              Rather than make <br/>unproven claims about our fertilizer, we focus on education,<br/>testing, and proper use to document results. This process may be<br/> slower, but it ensures that we support the growth of <br/>
              sustainable agriculture around the world.
              </p>
              <Link to ="/signup">
              <button className="button-button1">Get Started</button>
              </Link>

              <Link to ="/store">
              <button className="button-button2" position='absolute' left={10}>Shop Now</button>
              </Link>
              </div>
                <img src={img1} height={309} width={626} />
                

                <div className="card">
                <img src={img2} />
               
  
                <p><button>Fertilizer Store</button></p>
                </div>
      </div>
                

                  
            
                        
                    
               
            
        
    );
}

export default Home;