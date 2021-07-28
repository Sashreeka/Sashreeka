import React from 'react';
import './Handbook.css';

import Navigation from "../../components/common/header/Navigation";
import Footer from "../../components/common/footer/footer";


function Handbook() {
    return(
        <div>
            <Navigation />
            <div class="handbook">
                <h1>Sashreeka Fertilizer Hand Book</h1>
                <iframe src="https://www.doa.gov.lk/publications/books/ipns.pdf"  class="handbookPdf" /*width="100%" height="600px"*/></iframe>
            </div>
            <Footer />
        </div>
    )
}

export default Handbook;