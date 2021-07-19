import React from 'react';
import "./Store.css";
import Carousel from 'react-elastic-carousel';
import FerCatItem from './storeComponents/FerCatItem';
import FerProductItem from './storeComponents/FerProductItem';
import FerProOffer from './storeComponents/FerProOffer';

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

    const breakPoints1 = [
        {width: 250, itemsToShow: 1},
        {width: 450, itemsToShow: 2},
        {width: 650, itemsToShow: 3},
        {width: 850, itemsToShow: 4},
        {width: 1050, itemsToShow: 5},
        {width: 1250, itemsToShow: 6},
        {width: 1450, itemsToShow: 7},

    ];

    return(
        
        <div className="fer-store-web">
            <div className="fer-store-content">
                {/*Search bar*/}
                <div className="Store_bar">
                    <div className="Search_bar">
                        <form>
                            <input type='text' className="Search_input" placeholder="Search store..."></input>
                            <button type="submit" className="Search_button"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                        
                    <div className="shopping_details">
                        <p className="Subtotal">2 items - Rs. 3850.00</p>
                        <button type="submit" className="shopping_cart"><i className="fas fa-shopping-cart"></i></button>
                    </div>
                </div>

                {/*corousal*/}
                    <img className="shop-corousal" src={require('../../assets/images/shop-slide-1.jpg').default}></img>
                    

                {/*Fertilizer categories*/}
                <h3 className="fer-topic">Fertilizer Categories</h3>
                <hr/>
                <div className="fer-cat">
                    <Carousel breakPoints={breakPoints}>
                        <FerCatItem ferCatImage = {require("../../assets/images/fer-cat-1.jpg").default} ferCatName = 'Paddy' />
                        <FerCatItem ferCatImage = {require("../../assets/images/fer-cat-2.jpg").default} ferCatName = 'Coconut' />
                        <FerCatItem ferCatImage = {require("../../assets/images/fer-cat-3.jpg").default} ferCatName = 'Compost' />
                        <FerCatItem ferCatImage = {require("../../assets/images/fer-cat-4.jpg").default} ferCatName = 'Vegetable' />
                        <FerCatItem ferCatImage = {require("../../assets/images/fer-cat-5.jpg").default} ferCatName = 'Tea' />
                        <FerCatItem ferCatImage = {require("../../assets/images/fer-cat-6.jpg").default} ferCatName = 'Flower' />
                        <FerCatItem ferCatImage = {require("../../assets/images/fer-cat-1.jpg").default} ferCatName = 'Liquid' />
                        <FerCatItem ferCatImage = {require("../../assets/images/fer-cat-2.jpg").default} ferCatName = 'Animal' />
                        <FerCatItem ferCatImage = {require("../../assets/images/fer-cat-3.jpg").default} ferCatName = 'Leaf' />
                        <FerCatItem ferCatImage = {require("../../assets/images/fer-cat-4.jpg").default} ferCatName = 'Regular' />
                    </Carousel>
                </div>

                {/*Popular products*/}
                <h3 className="fer-topic">Popular products</h3>
                <hr/>
                <div className="fer-products_row">
                    <Carousel breakPoints={breakPoints1}>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferName="Rock Phospate" ferPrice = "Rs. 3790.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-2.jpg").default} ferName="Vermicompost" ferPrice = "Rs. 1540.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-3.jpg").default} ferName="Manure" ferPrice = "Rs. 1000.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferName="Chicken Litter" ferPrice = "Rs. 1500.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-2.jpg").default} ferName="Litter Seaweed" ferPrice = "Rs. 3050.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-3.jpg").default} ferName="MorBlooom" ferPrice = "Rs. 4990.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferName="Bio Gold" ferPrice = "Rs. 2679.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-2.jpg").default} ferName="Bio Vaccine" ferPrice = "Rs. 2780.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-3.jpg").default} ferName="Bio Phos" ferPrice = "Rs. 2670.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferName="Grade A Dark Compost" ferPrice = "Rs. 2750.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-2.jpg").default} ferName="Humas soil" ferPrice = "Rs. 4170.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-3.jpg").default} ferName="Regular compost" ferPrice = "Rs. 1250.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferName="Vermi liquid compost" ferPrice = "Rs. 1250.00"/>
                    </Carousel>
                </div>

                {/*New arrival*/}
                <h3 className="fer-topic">New Arrivals</h3>
                <hr/>
                <div className="fer-products_row">
                    <Carousel breakPoints={breakPoints1}>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferName="Rock Phospate" ferPrice = "Rs. 3790.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-2.jpg").default} ferName="Vermicompost" ferPrice = "Rs. 1540.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-3.jpg").default} ferName="Manure" ferPrice = "Rs. 1000.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferName="Chicken Litter" ferPrice = "Rs. 1500.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-2.jpg").default} ferName="Litter Seaweed" ferPrice = "Rs. 3050.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-3.jpg").default} ferName="MorBlooom" ferPrice = "Rs. 4990.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferName="Bio Gold" ferPrice = "Rs. 2679.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-2.jpg").default} ferName="Bio Vaccine" ferPrice = "Rs. 2780.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-3.jpg").default} ferName="Bio Phos" ferPrice = "Rs. 2670.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferName="Grade A Dark Compost" ferPrice = "Rs. 2750.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-2.jpg").default} ferName="Humas soil" ferPrice = "Rs. 4170.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-3.jpg").default} ferName="Regular compost" ferPrice = "Rs. 1250.00"/>
                        <FerProductItem ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferName="Vermi liquid compost" ferPrice = "Rs. 1250.00"/>
                    </Carousel>
                </div>

                {/*Offers*/}
                <h3 className="fer-topic">Exclusive Offers</h3>
                <hr/>
                <div className="fer-products_row">
                    <Carousel breakPoints={breakPoints1}>
                        <FerProOffer ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferOfferPrice="Rs. 4000.00" ferName="Rock Phospate" ferPrice = "Rs. 3790.00"/>
                        <FerProOffer ferProImage = {require("../../assets/images/fer-pro-2.jpg").default} ferOfferPrice="Rs. 1650.00" ferName="Vermicompost" ferPrice = "Rs. 1540.00"/>
                        <FerProOffer ferProImage = {require("../../assets/images/fer-pro-3.jpg").default} ferOfferPrice="Rs. 1250.00" ferName="Manure" ferPrice = "Rs. 1000.00"/>
                        <FerProOffer ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferOfferPrice="Rs. 1550.00" ferName="Chicken Litter" ferPrice = "Rs. 1500.00"/>
                        <FerProOffer ferProImage = {require("../../assets/images/fer-pro-2.jpg").default} ferOfferPrice="Rs. 3100.00" ferName="Litter Seaweed" ferPrice = "Rs. 3050.00"/>
                        <FerProOffer ferProImage = {require("../../assets/images/fer-pro-3.jpg").default} ferOfferPrice="Rs. 5200.00" ferName="MorBlooom" ferPrice = "Rs. 4990.00"/>
                        <FerProOffer ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferOfferPrice="Rs. 2750.00" ferName="Bio Gold" ferPrice = "Rs. 2679.00"/>
                        <FerProOffer ferProImage = {require("../../assets/images/fer-pro-2.jpg").default} ferOfferPrice="Rs. 2850.00" ferName="Bio Vaccine" ferPrice = "Rs. 2780.00"/>
                        <FerProOffer ferProImage = {require("../../assets/images/fer-pro-3.jpg").default} ferOfferPrice="Rs. 2800.00" ferName="Bio Phos" ferPrice = "Rs. 2670.00"/>
                        <FerProOffer ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferOfferPrice="Rs. 2850.00" ferName="Grade A Dark Compost" ferPrice = "Rs. 2750.00"/>
                        <FerProOffer ferProImage = {require("../../assets/images/fer-pro-2.jpg").default} ferOfferPrice="Rs. 4220.00" ferName="Humas soil" ferPrice = "Rs. 4170.00"/>
                        <FerProOffer ferProImage = {require("../../assets/images/fer-pro-3.jpg").default} ferOfferPrice="Rs. 1320.00" ferName="Regular compost" ferPrice = "Rs. 1250.00"/>
                        <FerProOffer ferProImage = {require("../../assets/images/fer-pro-1.jpg").default} ferOfferPrice="Rs. 1310.00" ferName="Vermi liquid compost" ferPrice = "Rs. 1250.00"/>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Store;