import React from 'react';
import './App.css';

import Header from './Components/Header';
import PrimaryCard from './Components/PrimaryCard';

function App() {
  return (
    <div className="container-fluid app-main">
        <Header />
        <PrimaryCard />
    </div>
  );
}

export default App;
