import React from 'react';
import noResults from '../Images/NoResults.png';

import './NoResults.css';


const NoResults = () => {
    return(
        <div className='no-results-main'>
            <div>
                <img src={noResults} alt="No Results" className = "no-results-img" />
            </div>
            <div>
                <h4 className="no-results-text">Sorry, we couldn't find any <br /><span style={{color:'#4B5AA5',fontWeight:600}}>News</span> for your search.</h4>
            </div>
        </div>
    )
}
export default NoResults;