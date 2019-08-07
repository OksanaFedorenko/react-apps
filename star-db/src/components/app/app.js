import React from 'react';

import Header from './../header';
import RandomPlanet from './../random-planet';

import './app.css';

const App = () => {
  return (
    <div className="stardb-app container">
      <Header />
      <RandomPlanet />
    </div>
  )
}

export default App;