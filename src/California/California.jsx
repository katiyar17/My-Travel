import React from 'react'
import { Link } from 'react-router-dom';
import './California.css';
import { Californiadata } from './Californiadata';
import "bootstrap-icons/font/bootstrap-icons.css";
export default function California() {
   
  const renderstars = (rating) => {
    
    const stars = [];

    for(let i = 0; i<5; i++) {
      if(rating > 0.5) {
        stars.push(<i key = {i} className="bi bi-star-fill"></i>);
        rating--;
      } else  if(rating > 0) {
        stars.push(<i key = {"half"} className="bi bi-star-half"></i>);
        rating--;
      } else {
        stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
      } 
    }
      return stars;
  }

  return (
    <div>
       <h1 className='usaheading'>  Welcome to California 🤘 </h1>
    <Link to="/backtousa"  class="btn  btn-secondary">Back</Link>
    <div className="travel-container">
      {Californiadata.map((data, index) => (
        <div className="destination-box" key={index}> 
        <h3>{data.title}</h3>
        {data.image && <img src={data.image} alt="" className="destination-image"/>}
        <div className="rating">
    {renderstars(data.rating).map((star, index) => (
        <span key={index} className="star">{star}</span>
    ))}
</div>
        <p>{data.description}</p>
         </div>
      ) )}
    </div>
    </div>
  )
}
