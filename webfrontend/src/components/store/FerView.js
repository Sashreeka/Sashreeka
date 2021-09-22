import React, { useState, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import "./FerView.css";
import fer_img2 from "../../assets/images/Store/item3.jpg";
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
                        <div class="ferview-image">
                            <img src={fer_img2} />
                        </div>

                        
                        <div className="discription">
                            
                        <h className="discription-head">Coco Peat</h>
                            <p>Description <br/><br/>Coco peat is a non-fibrous, spongy, lightweight, corky material that holds the coir fibre in coconut husk together. Also known as coco pith, coco peat is a 100% organic, natural and biodegradable substance that was the by-product of the coconut fibre extraction process.</p>
                        </div>
                        <div>
                        <div className="addToCart-button">
                                <input
                                    type="submit"
                                    className="contactbtn"
                                    value="Add to cart"
                                />
                            </div>
                        </div>
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

                    <div className="comment-section">
                    <h className="rating-comments">Comments</h>
                    </div>
                   
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

                       <div className="rate-form">
                        <h>Add your comments and rates</h>
                            <div className="comment_box">
                                <textarea
                                required
                        
                                name="comment"
                                placeholder="Add your comment"></textarea>
                            </div>
                                <div className="your-rates">
                                <ReactStars
                                count={5}
                                size={24}
                                activeColor="#ffd700"
                                />
                                </div>
              
                            <div className="rate-button">
                                <input
                                    type="submit"
                                    className="contactbtn"
                                    value="Send"
                
                                />
                            </div>
                        </div>
                        
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