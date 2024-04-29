// SafetyGuide.js
import React from 'react';
import { Safetydata } from './Safetydata';
import { Link } from 'react-router-dom';
export default function SafetyGuide() {
  return (
    <div>
      
      <h2 className='travel-heading'>Safety Guidelines</h2>

      <div className="travel-container">

        {Safetydata.map((mydata, index) => (
          <div className="destination-box" key={index}>
            <h3>{mydata.title}</h3>
            <p>{mydata.safetyGuidelines}</p>
          </div>
        ))}
      </div>

      <div class="button-container-travel">
       
       <Link to="/back"  class="btn btn-secondary-travel">Back</Link>
 </div>

    </div>
  );
}
