import React from 'react';
import './Home.css'; 
 
import { Link } from 'react-router-dom'; 
import i1 from './images/i1.jpg'; // Import the image

export default function Home() {
    return (
        <div className="full-screen-image">
            <div className='text-overlay'>
                <h1>Explore Your Travelling Destination</h1>
                <div className="button-container">
                    <Link to="/usa" className="overlay-button">U.S.A</Link>
                    <Link to="/london" className="overlay-button">London</Link>
                    <Link to="/amsterdam" className="overlay-button">Amsterdam</Link>
                </div>
            </div>
            
            <img
                src={i1} // Use the imported image variable as the source
                alt="Travel Destination"
            />
        </div>
    );
}
