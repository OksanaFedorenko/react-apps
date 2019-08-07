import React from 'react';

import './random-planet.css';

const RandomPlanet = () => {
  return (
    <div className="random-planet d-flex">
      <div>
        <img src="./../../3.jpg" />
      </div>
      <div>
        <h4>Endor</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span>Population</span>
            <span>10000000</span>
          </li>
          <li className="list-group-item">
            <span>Rotation Period</span>
            <span>26</span>
          </li>
          <li className="list-group-item">
            <span>Diameter</span>
            <span>10000</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RandomPlanet;