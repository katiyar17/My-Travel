import React from 'react';
import './USA.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

export default function USA() {
  return (
    <div className="usa-background">
      <div>
        <h1 className='usaheading'>Welcome to USA 🤙</h1>

        <div className="image-container">
          <div className="image-card">
            <Link to="/newyork" className="image-button">New York</Link>
            <img
              className="destination-image"
              src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
              alt="New York City skyline"
            />
          </div>
          <div className="image-card">
            <Link to="/lasvegas" className="image-button">Las Vegas</Link>
            <img
              className="destination-image"
              src="https://images.unsplash.com/photo-1675044875377-1f761fbf5e73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVnYXMlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Las Vegas skyline"
            />
          </div>
          <div className="image-card">
            <Link to="/california" className="image-button">California</Link>
            <img
              className="destination-image"
              src="https://images.unsplash.com/photo-1471306224500-6d0d218be372?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbGlmb3JuaWF8ZW58MHx8MHx8fDA%3D"
              alt="California coast"
            />
          </div>
        </div>
        <Link to="/backtohome"  className="btn btn-secondary">Back</Link>
      </div>
    </div>
  );
}
