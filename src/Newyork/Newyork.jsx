import React from 'react'
import { Newyorkdata } from './Newyorkdata'
import { Link } from 'react-router-dom'
export default function Newyork() {
  return (
    <div>
    <h1 className='usaheading'>  Welcome to Newyork 😎 </h1>
    <Link to="/backtousa"  class="btn btn-secondary">Back</Link>
    <div className="travel-container">
      {Newyorkdata.map((data, index) => (
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
