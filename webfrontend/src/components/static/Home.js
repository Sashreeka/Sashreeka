import React from 'react';
import './Home.css';
import img1 from '../../assets/images/Home/back2.jpg';
import fIcon1 from '../../assets/images/Home/f-icon1.jpg';
import fIcon2 from '../../assets/images/Home/f-icon2.jpeg';
import fIcon3 from '../../assets/images/Home/f-icon3.jpg';
import aboutImg1 from '../../assets/images/Home/about-img1.jpg';
import aboutImg2 from '../../assets/images/Home/about-img2.png';
//import img2 from '../../assets/images/Home/img2.jpeg';
//import {Link} from 'react-router-dom'
import img2 from '../../assets/images/Home1/1.jpg';
import img3 from '../../assets/images/Home1/3.jpg';
import img4 from '../../assets/images/Home1/2.jpeg';
import img5 from '../../assets/images/Home1/4.png';
import img6 from '../../assets/images/Home1/5.jpg';


function Home() { 
    return(
        
         
    <div>
    <section class="home" id="home">

    <div class="content">
        <h3>Welcome to Shashreeka </h3>
        <h4>The Best Online Organic Fertilizer Market</h4>
        <p>Shashreeka recognized that the growing demand for organic crop farming required an increased focus on providing an all-natural solution to boost soil nutrition.
              Rather than make unproven claims about our fertilizer, we focus on education,testing, and proper use to document results. This process may be slower, but it ensures that we support the growth of
              sustainable agriculture around the world.</p>
        <a href="./signup" class="btn">Get Started</a>
    </div>

    <div class="image">
        <img src={img1}/>
    </div>

    </section>
   

{/*<section class="features" id="features">

    

    <div class="box-container">

        <div class="box">
            <img src={fIcon1} />
            <h3>Fertilizer Store</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
            <a href="#" class="btn">Shop Now</a>
    </div>

        <div class="box">
            <img src={fIcon2}/>
            <h3>Fertilizer Book</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
            <a href="#" class="btn">Read More</a>
        </div>

        <div class="box">
            <img src={fIcon3}/>
            <h3>Delivery Service</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
            <a href="#" class="btn">Join With Us</a>
        </div>

    </div>

</section>

<section class="about" id="about">

    

    <div class="column">

        <div class="image">
            <img src={aboutImg1}/>
        </div>

        <div class="content">
            <h3>Organic Fertilizer is Dominating</h3>
            <p>Chemical fertilizer is harmful for body. Chemical fertilizer is harmful for bodyChemical fertilizer is harmful for body. Chemical fertilizer is harmful for bodyChemical fertilizer is harmful for body. Chemical fertilizer is harmful for bodyChemical fertilizer is harmful for body. Chemical.</p>
            <p>This is your opprtunity to grow green with organic fertilizer</p>
            <div class="buttons">
                <a href="#" class="btn">View Products </a>
                
            </div>
        </div>

    </div>

</section>

<section class="about" id="about1">

    

    <div class="column">

        
   

        <div class="content">
            <h3>Searching For Extra Earning?</h3>
            <p>Shasreeka is the  best opportunity to for you vehical service. Join as our delivery agent and be a main part of the organic fertilizer supply chain of the country. High quality</p>
            
            <div class="buttons">
                <a href="#" class="btn">View Products </a>
                
            </div>
        </div>
        
        <div class="image">
            <img src={aboutImg2}/>
        </div>

        

    </div>

</section>
*/}
<section id="service" className="service">

{/*<h1 className="heading">our services</h1>*/}

<div className="row1">

  <div className="image">
    <img src={img2}/>
  </div>
  <div className="content">
    <h3>About</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>

</div>

<div className="row1">

  <div className="content">
    <h3>Fertilizer Store</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
  <div className="image">
    <img src={img3}/>
  </div>

</div>

<div className="row1">

  
  <div className="image">
    <img src={img4}/>
  </div>
  <div className="content">
    <h3>Fertilizer Handbook</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>

</div>

<div className="row1">

  <div className="content">
    <h3>Delivery Service</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
  <div className="image">
    <img src={img5}/>
  </div>

</div>

<div className="row1">

  
  <div className="image">
    <img src={img6}/>
  </div>
  <div className="content">
    <h3>Join With Us</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>

</div>

{/*<div className="row1">

  <div className="content">
    <h3>Join With Us</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas nemo placeat. Voluptas.</p>
    <a href="#"><button className="btn">read more</button></a>
  </div>
  <div className="image">
    <img src={img6}/>
  </div>

</div>*/}

</section>
</div>


                        
);
}

export default Home;