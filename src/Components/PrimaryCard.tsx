import React from 'react';

import './primaryCard.css';
// import image from '../Images/first.jpg';
import noImage from '../Images/2953962.jpg';

import userIcon from '../Icons/user.png';
import timeIcon from '../Icons/date.png';
import { demoList, News } from '../demolist';

type Myprop = {
    data:News 
}

const PrimaryCard = (prop:Myprop) => {
    //convert yyyy-mm-dd to dd-mm-yyyy
    const format = (inputDate:string) => {
        var date = new Date(inputDate);
        if (!isNaN(date.getTime())) {
            // Months use 0 index.
            return date.getDate()  + '-' + 0+(date.getMonth()+1) + '-' + date.getFullYear();
        }
    }
    if (!prop.data || prop.data === null) return <p>No repos, sorry</p>;
    return(
        <div className="card-primary-main">
            <div className='row card-primary-row'>
                
                <div className=" col-sm-12 col-md-6 card-primary-first-col">
                    <a href={prop.data.url} target='blank' title={prop.data.title}>
                        <img src={prop.data.urlToImage === null ? noImage:prop.data.urlToImage } alt="" className="card-primary-image w-100"/>
                    </a>
                </div>
                <div className=" col-sm-12 col-md-6 card-primary-second-col px-2">
                <a href={prop.data.url} target='blank' title={prop.data.title}>

                    <h1 className="primary-title">
                    {prop.data.title}
                    </h1>
                    <p className="primary-description">
                    {prop.data.description}
                    </p>
                    <div className="post-details w-100">
                        <img src={userIcon} alt="" className="user-icon"/>
                        <p className="author-name mt-3 ms-1">{prop.data.author}</p>
                        <img src={timeIcon} alt="" className="time-icon ms-3"/>
                        <p className="author-name publish-date mt-3 ms-1">{format(prop.data.publishedAt.slice(0,10))}</p>
                    </div>
                </a>
                </div>
            </div>
        </div>
    );
}
export default PrimaryCard;