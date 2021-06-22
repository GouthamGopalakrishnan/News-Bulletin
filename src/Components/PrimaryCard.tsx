import React from 'react';

import './primaryCard.css';
// import image from '../Images/first.jpg';
import noImage from '../Images/2953962.jpg';

import userIcon from '../Icons/user.png';
import timeIcon from '../Icons/date.png';
import { demoList } from '../demolist';


const PrimaryCard = () => {
    //convert yyyy-mm-dd to dd-mm-yyyy
    const format = (inputDate:string) => {
        var date = new Date(inputDate);
        if (!isNaN(date.getTime())) {
            // Months use 0 index.
            return date.getDate()  + '-' + 0+(date.getMonth()+1) + '-' + date.getFullYear();
        }
    }
    return(
        <div className="card-primary-main">
            <div className='row card-primary-row'>
                <div className=" col-sm-12 col-md-6 card-primary-first-col">
                    <img src={demoList[0].articles[0].urlToImage === null ? noImage:demoList[0].articles[0].urlToImage } alt="" className="card-primary-image w-100"/>
                </div>
                <div className=" col-sm-12 col-md-6 card-primary-second-col">
                    <h1 className="primary-title">
                    {demoList[0].articles[0].title}
                    </h1>
                    <p className="primary-description">
                    {demoList[0].articles[0].description}
                    </p>
                    <div className="post-details w-100">
                        <img src={userIcon} alt="" className="user-icon"/>
                        <p className="author-name mt-3 ms-1">{demoList[0].articles[0].author}</p>
                        <img src={timeIcon} alt="" className="time-icon ms-3"/>
                        <p className="author-name publish-date mt-3 ms-1">{format(demoList[0].articles[0].publishedAt.slice(0,10))}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PrimaryCard;