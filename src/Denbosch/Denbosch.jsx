import React from 'react'
import { Link } from 'react-router-dom'
import { Denboschdata } from './Denboschdata'
export default function Denbosch() {
  return (
    <div>
       <h1 className='usaheading'>  Welcome to Denbosch 🤘 </h1>
    <Link to="/amsterdam"  class="btn  btn-secondary">Back</Link>
    <div className="travel-container">
      {Denboschdata.map((data, index) => (
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
