import React from 'react';
import './Home.css';
// import img1 from '../../assests/images/Home/back-img-1.png'
import img1 from '../../assets/images/Home/back-img-1.jpg';
 
function Home() { 
    return(
        <>
<div class="banner">
    <div class="left-column"></div>
    <div class="right-column"></div>
    <img src={img1} />
</div>

</>
    );
}

export default Home;