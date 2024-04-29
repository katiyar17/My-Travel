import React from 'react';
import { TravelData } from './Traveldata';
import { Link } from 'react-router-dom';
export default function TravelGuide() {
  return (
    <div>
      <h2  className='travel-heading'>Travel Guidelines</h2>
      <div className="travel-container">
        {TravelData.map((destination, index) => (
          <div className="destination-box" key={index} >
            <h3>{destination.title}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
      <div class="button-container-travel">
       
      <Link to="/back"  class="btn btn-secondary-travel">Back</Link>
</div>
    </div>
  );
}
