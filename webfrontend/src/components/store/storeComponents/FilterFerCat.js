import React from 'react';

function FilterFerCat(props) { 
    return( 
        <div className="filter-options-fercat">
            <label>{props.filter}</label> <button><i class="fas fa-chevron-right"></i></button>
        </div>
    );
}
                
export default FilterFerCat;