import React from 'react';

function FilterStore(props) { 
    return( 
        <div className="filter-options">
            <input type="checkbox"/> <label>{props.filter}</label>
        </div>
    );
}
                
export default FilterStore;