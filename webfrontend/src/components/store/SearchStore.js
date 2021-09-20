import React, { useState, useEffect } from 'react';
import "./Store.css";
import Carousel from 'react-elastic-carousel';
import FerCatItem from './storeComponents/FerCatItem';
import FerProductItem from './storeComponents/FerProductItem';
import FerProOffer from './storeComponents/FerProOffer';
import FilterStore from './storeComponents/FilterStore';
import FilterFerCat from './storeComponents/FilterFerCat';
//import FerProData from './storeComponents/FerProData';
import Slider from 'infinite-react-carousel';
import {useCart} from 'react-use-cart';
import { Link } from "react-router-dom";
import axios from "axios";

import Navigation from "../../components/common/header/Navigation";
import Footer from "../../components/common/footer/footer";

function SearchStore() {
    const {
        totalItems,
        cartTotal,
    } = useCart();

    const settings = {
        centerPadding: 10,
        dots: true,
        overScan: 5,
        slidesPerRow: 1,
        virtualList: true,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        duration: 10
    };

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

    const [ofrfer, setOfrData] = useState([]);
        useEffect(() => {
            axios.get("http://localhost:4000/getoffer").then((response) => {
            setOfrData(response.data);
            console.log(response.data);
            })
        }, []);

    const [fercat, setFerCat] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/getfercategory").then((response) => {
        setFerCat(response.data);
        console.log(response.data);
        })
    }, []);
    

    return(
        <>
        <Navigation />
        <div className="fer-store-web">
            <div className="fer-store-content">
                {/*Search bar*/}
                <div className="Store_bar">
                    <div className="Search_bar">
                        <form>
                            <input type='text' className="Search_input" placeholder="Search store..."></input>
                            <Link to="/searchstore">
                                <button type="submit" className="Search_button"><i className="fas fa-search"></i></button>
                            </Link>
                        </form>
                    </div>
                        
                    <div className="shopping_details">
                        <p className="Subtotal">{totalItems} items - Rs. {cartTotal}</p>
                        <Link to="/storecart">
                            <button type="submit" className="shopping_cart"><i className="fas fa-shopping-cart"></i></button>
                        </Link>
                    </div>
                </div>

                {/*corousal*/}
                <Slider {...settings}>
                    <img className="shop-corousal" src={require('../../assets/images/Store/shop-slide-1.jpg').default}></img>
                    <img className="shop-corousal" src={require('../../assets/images/Store/shop-slide-2.jpg').default}></img>
                    <img className="shop-corousal" src={require('../../assets/images/Store/shop-slide-3.jpg').default}></img>
                    <img className="shop-corousal" src={require('../../assets/images/Store/shop-slide-4.jpg').default}></img>
                    <img className="shop-corousal" src={require('../../assets/images/Store/shop-slide-5.jpg').default}></img>
                </Slider>

                <div class="store-search-container">
                    <div className="store-serch-filter">
                        <div class="filter-option-box">
                            <p>Filter</p>
                            <FilterStore filter="Most Rated"/>
                            <FilterStore filter="Popular"/>
                            <FilterStore filter="Offers"/>
                            <FilterStore filter="Price: Low to High"/>
                            <FilterStore filter="Price: High to Low"/>
                            <FilterStore filter="New Arrivals"/>
                        </div>

                        <div class="filter-category-box">
                            <p>Fertilizer Categories</p>
                            {fercat.map((item,index)=>{
                                return(
                                    <FilterFerCat filter={item.description}/>
                                )
                            })}
                        </div>
                    </div>
                    <div class="search-result-container">
                        {/*Search Results*/}
                        <h3 className="fer-topic"><i class="fas fa-leaf"></i> Search Results ...</h3>
                        <hr/>
                        <div className="fer-search-results">
                        {ofrfer.map((item,index)=>{
                            return(
                                <FerProOffer ferProImage = {item.img} ferWeight={item.weight} ferName={item.name} ferOffer={item.offer} ferPrice = {item.price} ferUnitPrice = {item.unitPrice} item={item} key ={index}/>
                            )
                        })}
                        </div>
                        
                        {/*Fertilizer categories*/}
                        <h3 className="fer-topic"><i class="fas fa-leaf"></i> Fertilizer Categories</h3>
                        <hr/>
                        <div className="fer-cat">
                            <Carousel breakPoints={breakPoints}>
                                {fercat.map((item,index)=>{
                                    return(
                                        <FerCatItem ferCatImage = {item.photo} ferCatName={item.description} />
                                    )
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default SearchStore;
