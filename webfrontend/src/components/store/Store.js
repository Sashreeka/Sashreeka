import React from 'react';
import "./Store.css";

function Store() {
    return(
        <div>
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

            <div className="fer-cat">
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
            </div>

            <h1>This is Store</h1>
            <p>Shashreeka recognized that the growing demand for organic crop farming required an increased focus on providing an all-natural solution to boost soil nutrition. Rather than make unproven claims about our fertilizer, we focus on education, testing, and proper use to document results. This process may be slower, but it ensures that we support the growth of sustainable agriculture around the world.</p>
        </div>
    )
}

export default Store;