import React from 'react';
import './Home.css';
// import img1 from '../../assests/images/Home/back-img-1.png'
import img1 from '../../assets/images/Home/img1.jpg';
import {Link} from 'react-router-dom'

function Home() { 
    return(
        
               <div className="home" >
              {/*<img src={img1} height={309} width={626} position= 'absolute' top={10} left={10} />*/}
               <div class="headerContainer">
               
               <h1>Welcome to Shashreeka</h1>

                         <h3>The Best Online Organic Fertilizer Market</h3>
                         <p>Shashreeka recognized that the growing demand for organic <br/>crop farming required an increased focus on providing <br/>an all-natural solution to boost soil nutrition.
                           Rather than make <br/>unproven claims about our fertilizer, we focus on education,<br/>testing, and proper use to document results. This process may be<br/> slower, but it ensures that we support the growth of <br/>
                           sustainable agriculture around the world.
                         </p>
                         <Link to ="/signup">
                        <button>Get Started</button>
                        </Link>
                      
    

                        </div>
                        <img src={img1} height={309} width={626} position= 'absolute' top={10} left={10} />
                        </div>
                        
                    
               
            
        
    );
}

export default Home;