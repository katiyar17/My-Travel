import React from 'react'
 import { Link } from 'react-router-dom'
import { Rotterdamdata } from './Rotterdamdata'
export default function Rotterdam() {
  return (
    <div>
       <h1 className='usaheading'>  Welcome to Rotterdam 🍻 </h1>
    <Link to="/amsterdam"  class="btn  btn-secondary">Back</Link>
    <div className="travel-container">
      { Rotterdamdata.map((data, index) => (
        <div className="destination-box" key={index}> 
        <h3>{data.title}</h3>
        {data.image && <img src={data.image} className="destination-image"/>}
        
        <p>{data.description}</p>
         </div>
      ) )}
    </div>
    </div>
  )
}
