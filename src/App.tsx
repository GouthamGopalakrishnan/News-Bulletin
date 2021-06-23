// import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import './App.css';
import {demoList} from './demolist';

import Header from './Components/Header';
import NewsCard from './Components/NewsCard';
import PrimaryCard from './Components/PrimaryCard';
import Footer from './Components/Footer';

function NewsBulletin() {
  return (
    <div className="container-fluid bulletin-main">


      <Header />
      <PrimaryCard data={demoList[0].articles[0]}/>
      <NewsCard data = {demoList[0]}/>
      <Footer />
    </div>
  );
}

export default NewsBulletin;
