import React from 'react'
import { Link } from 'react-router-dom'
import { IslingtonTravelData } from './IslingtonTravelData '
export default function Islington() {
  return (
    <div>
      
     <h1  className='usaheading'>Welcome to Islington</h1>
 
     <Link to="/london" class="btn  btn-secondary">Back</Link>

    <div className="travel-container">
      {IslingtonTravelData.map((data, index) => (
        <div className="destination-box" key={index}> 
        <h3>{data.title}</h3>
        {data.image && <img src={data.image} alt="" className="destination-image"/>}
        
        <p>{data.description}</p>
         </div>
      ) )}
    </div>

    </div>
  )
}
