// import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import './App.css';
import {demoList, NewsAPI} from './demolist';
// import { Skeleton } from 'antd';

import Header from './Components/Header';
import NewsCard from './Components/NewsCard';
import PrimaryCard from './Components/PrimaryCard';
import Footer from './Components/Footer';
import Skeleton from './Components/Skeleton';

//axios
import axios from 'axios';


type MyProp = {
  loading:Boolean,
  data:NewsAPI | null
}

const NewsBulletin = () => {
  const [newsList,setNewsList] = React.useState<MyProp>({loading: false, data:null});


  React.useEffect(() => {
    setNewsList({loading:true,data:null});
    // GET request using axios inside useEffect React hook
    axios.get('https://newsapi.org/v2/everything?q=apple&from=2021-06-22&to=2021-06-22&sortBy=popularity&apiKey=e59fd897898a42d68d07b44c0229d7e8')
        .then(response => {
          const allData = response.data;
          setNewsList({loading:false,data:allData})
        });

}, [setNewsList]);

   const checking = () => {
     if (newsList.data !== null) {
        return (
          <>
          <PrimaryCard data={newsList.data.articles[0]}/>
          <NewsCard data = {newsList.data}/>
          <Footer />
          </>
        )
   }
  }

  return (
    <div className="container-fluid bulletin-main">

      <Header />

      {
        newsList.loading === false ? checking() : <Skeleton />
      }
      {/* <PrimaryCard data={newsList.repos.articles[0]}/>
      <NewsCard data = {newsList.repos}/> */}
      
      
    </div>
  );
}

export default NewsBulletin;
