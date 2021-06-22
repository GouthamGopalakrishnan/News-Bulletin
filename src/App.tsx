// import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import './App.css';

import Header from './Components/Header';
import NewsCard from './Components/NewsCard';
import PrimaryCard from './Components/PrimaryCard';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="container-fluid app-main">
        <Header />
        <PrimaryCard />
        <NewsCard />
        <Footer />
    </div>
  );
}

export default App;
