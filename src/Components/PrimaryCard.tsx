import React from 'react';

import './primaryCard.css';
import image from '../Images/first.jpg';
import userIcon from '../Icons/user.png';
import timeIcon from '../Icons/date.png';


const PrimaryCard = () => {
    return(
        <div className="card-primary-main">
            <div className='row card-primary-row'>
                <div className=" col-sm-12 col-md-6 card-primary-first-col">
                    <img src={image} alt="" className="card-primary-image w-100"/>
                </div>
                <div className=" col-sm-12 col-md-6 card-primary-second-col">
                    <h1 className="primary-title">
                        Apple Podcasts subscriptions launch globally
                    </h1>
                    <p className="primary-description">
                        Apple has reportedly considered a plan to launch its own 
                        subscription-based healthcare service, according to a report from 
                        the Wall Street Journal..
                    </p>
                    <div className="post-details w-100">
                        <img src={userIcon} alt="" className="user-icon"/>
                        <p className="author-name mt-3 ms-1">Saqib Shah</p>
                        <img src={timeIcon} alt="" className="time-icon ms-3"/>
                        <p className="author-name publish-date mt-3 ms-1">16-06-2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PrimaryCard;