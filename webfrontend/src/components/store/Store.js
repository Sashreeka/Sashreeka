import React from 'react';
import "./Store.css";
import Carousel from 'react-elastic-carousel';

function Store() {
    const breakPoints = [
        {width: 200, itemsToShow: 1},
        {width: 350, itemsToShow: 2},
        {width: 500, itemsToShow: 3},
        {width: 650, itemsToShow: 4},
        {width: 800, itemsToShow: 5},
        {width: 950, itemsToShow: 6},
        {width: 1050, itemsToShow: 7},

    ];
    return(
        
        <div>
            {/*Search bar*/}
            <div className="Store_bar">
                <div className="Search_bar">
                    <form>
                        <input type='text' className="Search_input" placeholder="Search store..."></input>
                        <button type="submit" className="Search_button"><i class="fas fa-search"></i></button>
                    </form>
                </div>
                    
                <div className="shopping_details">
                    <p className="Subtotal">2 items - Rs. 3850.00</p>
                    <button type="submit" className="shopping_cart"><i class="fas fa-shopping-cart"></i></button>
                </div>
            </div>

            {/*Fertilizer categories*/}
            <h3 className="fer-topic">Fertilizer Categories</h3>
            <hr/>
            <div className="fer-cat">
                <Carousel breakPoints={breakPoints}>
                    <div className="fer-cat-item">
                        <div className="fer-cat-image">
                            <img src={require('../../assets/images/fer-cat-1.jpg').default}></img>
                        </div>
                        <div className="fer-cat-name">
                            <h4>Paddy</h4>
                        </div>
                    </div>

                    <div className="fer-cat-item">
                        <div className="fer-cat-image">
                            <img src={require('../../assets/images/fer-cat-1.jpg').default}></img>
                        </div>
                        <div className="fer-cat-name">
                            <h4>Paddy</h4>
                        </div>
                    </div>

                    <div className="fer-cat-item">
                        <div className="fer-cat-image">
                            <img src={require('../../assets/images/fer-cat-1.jpg').default}></img>
                        </div>
                        <div className="fer-cat-name">
                            <h4>Paddy</h4>
                        </div>
                    </div>

                    <div className="fer-cat-item">
                        <div className="fer-cat-image">
                            <img src={require('../../assets/images/fer-cat-1.jpg').default}></img>
                        </div>
                        <div className="fer-cat-name">
                            <h4>Paddy</h4>
                        </div>
                    </div>

                    <div className="fer-cat-item">
                        <div className="fer-cat-image">
                            <img src={require('../../assets/images/fer-cat-1.jpg').default}></img>
                        </div>
                        <div className="fer-cat-name">
                            <h4>Paddy</h4>
                        </div>
                    </div>

                    <div className="fer-cat-item">
                        <div className="fer-cat-image">
                            <img src={require('../../assets/images/fer-cat-2.jpg').default} />
                        </div>
                        <div className="fer-cat-name">
                            <h4>Paddy</h4>
                        </div>
                    </div>

                    <div className="fer-cat-item">
                        <div className="fer-cat-image">
                            <img src={require('../../assets/images/fer-cat-3.jpg').default}></img>
                        </div>
                        <div className="fer-cat-name">
                            <h4>Paddy</h4>
                        </div>
                    </div>

                    <div className="fer-cat-item">
                        <div className="fer-cat-image">
                            <img src={require('../../assets/images/fer-cat-4.jpg').default}></img>
                        </div>
                        <div className="fer-cat-name">
                            <h4>Paddy</h4>
                        </div>
                    </div>

                    <div className="fer-cat-item">
                        <div className="fer-cat-image">
                            <img src={require('../../assets/images/fer-cat-5.jpg').default}></img>
                        </div>
                        <div className="fer-cat-name">
                            <h4>Paddy</h4>
                        </div>
                    </div>

                    <div className="fer-cat-item">
                        <div className="fer-cat-image">
                            <img src={require('../../assets/images/fer-cat-6.jpg').default}></img>
                        </div>
                        <div className="fer-cat-name">
                            <h4>Paddy</h4>
                        </div>
                    </div>
                </Carousel>
            </div>

            {/*Popular products*/}
            <h3 className="fer-topic">Popular products</h3>
            <hr/>

            <div className="fer-products_row">
                <button className="rightLeft"><i class="fas fa-chevron-left"></i></button>
                
                <div className = "fer-product-container">
                    <div className="fer-product-avatar">
                        <img src={require('../../assets/images/fer-pro-1.jpg').default}></img>
                    </div>
                    <div className="fer-product-description">
                        <h6>Grade-A Black Compost</h6>
                        <div className="rating">
                            <div class="clip-star"></div>
                            <div class="clip-star"></div>
                            <div class="clip-star"></div>
                            <div class="clip-star"></div>
                            <div class="clip-star"></div>
                        </div>
                        <div className="fer-price">
                            <h6>Rs. 850.00 <i class="fas fa-tag"></i></h6>
                            <button>Add<i class="fas fa-cart-arrow-down"></i></button>
                        </div>
                    </div>
                </div>

                <div className = "fer-product-container">
                    <div className="fer-product-avatar">
                        <img src={require('../../assets/images/fer-pro-2.jpg').default}></img>
                    </div>
                    <div className="fer-product-description">
                        <h6>Grade-A Dark Compost</h6>
                        <div className="rating">
                            <div class="clip-star"></div>
                            <div class="clip-star"></div>
                            <div class="clip-star"></div>
                            <div class="clip-star"></div>
                            <div class="clip-star"></div>
                        </div>
                        <div className="fer-price">
                            <h6>Rs. 2100.00 <i class="fas fa-tag"></i></h6>
                            <button>Add<i class="fas fa-cart-arrow-down"></i></button>
                        </div>
                    </div>
                </div>

                <div className = "fer-product-container">
                    <div className="fer-product-avatar">
                        <img src={require('../../assets/images/fer-pro-3.jpg').default}></img>
                    </div>
                    <div className="fer-product-description">
                        <h6>Grade-A Dark Compost</h6>
                        <div className="rating">
                            <div class="clip-star"></div>
                            <div class="clip-star"></div>
                            <div class="clip-star"></div>
                            <div class="clip-star"></div>
                            <div class="clip-star"></div>
                        </div>
                        <div className="fer-price">
                            <h6>Rs. 2100.00 <i class="fas fa-tag"></i></h6>
                            <button>Add<i class="fas fa-cart-arrow-down"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store;