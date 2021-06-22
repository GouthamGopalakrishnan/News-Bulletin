import React from 'react';
import newsIcon from '../Icons/news-icon.png';

import './footer.css';
import './header.css';


const Footer = () => {
    return(
        <div className='footer-main'>
            <div className="footer-logo-div text-nowrap">
                <img src={newsIcon} alt="" className="news-icon" />
                <h1 className="news-bulletin-logo">
                    <span style={{ fontWeight: 600, color: '#4B5AA5' }}>NEWS</span> Bulletin
                </h1>
            </div>
        </div>
    )
}   
export default Footer;