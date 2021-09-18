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
                            <FilterFerCat filter="Paddy"/>
                            <FilterFerCat filter="Coconut"/>
                            <FilterFerCat filter="Compost"/>
                            <FilterFerCat filter="Vegetable"/>
                            <FilterFerCat filter="Tea"/>
                            <FilterFerCat filter="Flower"/>
                            <FilterFerCat filter="Liquid"/>
                            <FilterFerCat filter="Animal"/>
                            <FilterFerCat filter="Leaf"/>
                            <FilterFerCat filter="Regular"/>
                        </div>
                    </div>
                    <div class="search-result-container">
                        {/*Search Results*/}
                        <h3 className="fer-topic"><i class="fas fa-leaf"></i> Search Results ...</h3>
                        <hr/>
                        <div className="fer-search-results">
                        {ofrfer.map((item,index)=>{
                            return(
                                <FerProOffer ferProImage = {item.img} ferWeight={item.weight} ferName={item.name} ferOffer={item.offer} ferPrice = {item.price} item={item} key ={index}/>
                            )
                        })}
                        </div>
                        
                        {/*Fertilizer categories*/}
                        <h3 className="fer-topic"><i class="fas fa-leaf"></i> Fertilizer Categories</h3>
                        <hr/>
                        <div className="fer-cat">
                            <Carousel breakPoints={breakPoints}>
                            <FerCatItem ferCatImage = {'https://live.staticflickr.com/4300/35736991400_dcacae4810_b.jpg'} ferCatName = 'Paddy' />
                            <FerCatItem ferCatImage = {'https://cdn.shopify.com/s/files/1/0020/9692/2735/products/coconut-by-maharajasuper-com-60_480x480.jpg?v=1593241701'} ferCatName = 'Coconut' />
                            <FerCatItem ferCatImage = {'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-compost-1520281711.jpg'} ferCatName = 'Compost' />
                            <FerCatItem ferCatImage = {'https://previews.123rf.com/images/krimkate/krimkate1908/krimkate190800157/129018399-food-square-background-still-life-with-various-fresh-vegetables-on-wooden-table.jpg'} ferCatName = 'Vegetable' />
                            <FerCatItem ferCatImage = {'https://static6.depositphotos.com/1000528/594/i/600/depositphotos_5946965-stock-photo-tea-bud-and-leaves.jpg'} ferCatName = 'Tea' />
                            <FerCatItem ferCatImage = {'https://cdn.shopify.com/s/files/1/0250/6348/9616/products/nuccios-gem_131f8535-e072-48b0-86d7-8662aa752d6b.jpg?v=1615129160'} ferCatName = 'Flower' />
                            <FerCatItem ferCatImage = {'https://thumbs.dreamstime.com/b/coffee-splash-drop-macro-close-up-brown-liquid-smoke-188802385.jpg'} ferCatName = 'Liquid' />
                            <FerCatItem ferCatImage = {'https://i.pinimg.com/originals/00/07/75/000775ea917ffcd49521da19da4c2ba4.png'} ferCatName = 'Animal' />
                            <FerCatItem ferCatImage = {'https://cdn.vox-cdn.com/thumbor/HQ4WlkwPK0zG5L8CVrLds8QhaIE=/0x0:3000x1854/1200x800/filters:focal(1260x687:1740x1167)/cdn.vox-cdn.com/uploads/chorus_image/image/66181105/leaf_mold.0.jpg'} ferCatName = 'Leaf' />
                            <FerCatItem ferCatImage = {'https://www.ecofarmingdaily.com/wp-content/uploads/GettyImages-1140803112-scaled.jpg'} ferCatName = 'Regular' />
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
