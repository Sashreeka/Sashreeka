import React, { useState, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import "./FerView.css";
//import fer_img2 from "../../assets/images/Store/item2.jpg";
import man_img1 from "../../assets/images/Store/Man_1.jpg";
import Navigation from "../../components/common/header/Navigation";
import Footer from "../../components/common/footer/footer";

function FerView() {
    return(
        <>
             <Navigation />
             <div className="ferview-section">
                 <div className="ferView-leftSection">
                    <div className="left-ferview-container">
                        {/*<div class="ferview-image">
                            <img src={fer_img2} />
                        </div>*/}
                    </div>
                    
                 </div>
                 <div className="ferView-rightSection">
                    <div className="right-ferview-container">
                    <h className="rating-head">Rating<br/>3/5</h>
                   
                    <div className="sum-rate">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>

                    </div>


                    <h className="rating-comments">Comments</h>

                    <div className="fa-comment-dots"></div>
                        <div className="rate">
                            <div className="rate-left">
                            <div class="rate-left-image">
                            <img src={man_img1} />
                            </div>
                            </div>
                            <div className="rate-right">
                                This Product is good<br /> W.A.D.Silva

                            </div>
                        </div>
                       
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                        /> 
                    </div>
                    </div>
                    
                 </div>
                 
             

             
  
             
  {/*<ReactStars
            count={5}
   
        size={24}
        activeColor="#ffd700"
            /> */}
  
           
           <Footer />  

        </>
    )
}

export default FerView;