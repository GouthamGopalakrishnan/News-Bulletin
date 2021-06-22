import React from 'react';

import './NewsCard.css';
import demo from '../Images/first.jpg';
import userIcon from '../Icons/user.png';
import timeIcon from '../Icons/date.png';

import { Card,Divider } from 'antd';




const NewsCard = () => {

    return(
        <div className='news-card-main'>
            <div className="top-story-div">
                <h4 className="top-story-text">TOP STORIES</h4>
                <Divider />
            </div>
            <div className='justify-content-center'>
                <div className='row justify-content-center'>
                    <div className='col-sm-8 col-md-6 col-lg-4 '>
                    <Card 
                    className="card-main"
                    hoverable
                    style={{ width: '100%'  }}
                >
                    <img src={demo} alt="" className='card-img w-100 p-0' />
                    <div className='card-body'>
                        <h5 className="card-head-text ">
                            Apple Podcasts subscriptions launch globally
                        </h5>
                        <p className="card-description">
                            Apple is rolling out paid subscriptions and channels on its Podcasts app..
                        </p>
                        <div className="post-details w-100 pt-0">
                            <img src={userIcon} alt="" className="user-icon"/>
                            <p className="author-name mt-3 ms-1">Saqib Shah</p>
                            <img src={timeIcon} alt="" className="time-icon ms-3"/>
                            <p className="author-name publish-date mt-3 ms-1">16-06-2021</p>
                        </div>
                    </div>

                </Card>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default NewsCard;

