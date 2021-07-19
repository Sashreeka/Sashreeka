import React from 'react';

function FerCatItem(props) {
    return(
            <div className="fer-cat-item">
                <div className="fer-cat-image">
                    <img src={props.ferCatImage}></img>
                </div>
                <div className="fer-cat-name">
                    <h4>{props.ferCatName}</h4>
                </div>
            </div>
    );
}

export default FerCatItem;