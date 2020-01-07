import React, { useState } from 'react';
import './search-card.css'

export default function SearchCard(props) {

  return (
    props.available ? 
      <div className="card-cont available">
        <div className="card-location">
          {props.location.location.cityName}
        {" ("}{props.location.code}{")"}
        </div>
        
      </div>:
      <div className="card-cont">
      <div className="card-location">
        {props.location.location.cityName}
      {" ("}{props.location.code}{")"}
      </div>
      
    </div>

    
  );
}
