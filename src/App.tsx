import React from 'react';
import './App.css';

import Header from './Components/Header';
import NewsCard from './Components/NewsCard';
import PrimaryCard from './Components/PrimaryCard';

function App() {
  return (
    <div className="container-fluid app-main">
        <Header />
        <PrimaryCard />
        <NewsCard />
    </div>
  );
}

export default App;
