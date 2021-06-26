import React from 'react';

import './NewsCard.css';
import noImage from '../Images/newsBulletin.png';
import userIcon from '../Icons/user.png';
import timeIcon from '../Icons/date.png';

import { Card,Divider,Radio,RadioChangeEvent } from 'antd';


import {NewsAPI,News} from '../types/types'; //types

type MyProp = {
    data:NewsAPI
}
const NewsCard = (prop:MyProp) => {
    const [value, setValue] = React.useState<number>(1);
    const [newsData,setNewsData] = React.useState<News[]>(prop.data.articles)


    //track the change in radio button
    const onChange= (e:RadioChangeEvent ) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
      setNewsData(newsData.slice().reverse());
    };
  
    //convert yyyy-mm-dd to dd-mm-yyyy
    const format = (inputDate:string) => {
        var date = new Date(inputDate);
        if (!isNaN(date.getTime())) {
            // Months use 0 index.
            return date.getDate()  + '-' + 0+(date.getMonth()+1) + '-' + date.getFullYear();
        }
    }
 
    const newsArticle=newsData.map((article,index) => {

            return(
            
                <div className='col-sm-8 col-md-6 col-lg-4 ' style={{ flexDirection: 'column' }}>
                    <div className="news-card-col">
                        <a href={article.url} target='blank' title={article.title}>
                        <Card
                            className="card-main"
                            hoverable
                            style={{ width: '100%', height: '26rem', marginTop: '2em' }}
                        >
                            <img src={article.urlToImage === null ? noImage : article.urlToImage} alt="" className='card-img w-100 p-0' />
                            <div className='card-body'>
                                <h5 className="card-head-text text-wrap" style={{ height: '3rem' }}>
                                    {article.source.name}
                                </h5>
                                <p className="card-description text-wrap" style={{ height: '3rem' }}>
                                    {article.description}
                                </p>
                                <div className="post-card-details w-100 pt-0">
                                    <img src={userIcon} alt="" className="card-user-icon" />
                                    <p className="card-author-name mt-3 ms-1 text-wrap" style={{ width: '5rem', height: '1rem' }}>{article.author}</p>
                                    <img src={timeIcon} alt="" className="time-icon ms-3" />

                                    <p className="card-author-name card-publish-date mt-3 ms-1 text-wrap">{format(article.publishedAt.slice(0, 10))}</p>
                                </div>
                            </div>

                        </Card>
                        </a>
                    </div>
                </div>
            )
        }

    )

    return(
        <div className='news-card-main'>
            <div className="top-story-div row">
                <div className="col-sm-12 col-md-6">
                <h4 className="top-story-text mt-1">TOP STORIES</h4>
                </div>
                <div className="col-sm-12 col-md-6">
                <div className="radio-div">
                    <p className="sort-by mt-1">Sort by : </p>
                    <Radio.Group onChange={onChange} value={value} className="radio ms-3">
                        <Radio value={1}>Recent</Radio>
                        <Radio value={2}>Past</Radio>
                    </Radio.Group>
                </div>
                </div>

            </div>
                <Divider />
                
            
            <div>
                <div className='row justify-content-center'>
                    
                    {newsArticle}

                    </div>
                </div>

        </div>
    )
}
export default NewsCard;




