import React from 'react'
import { Link } from 'react-router-dom';
import {Eindhovendata} from './Eindhovendata';
export default function Eindhoven() {
  return (
    <div>
       <h1  className='usaheading'>Welcome to Eindhoven</h1>
 
       <Link to="/amsterdam"  class="btn  btn-secondary">Back</Link>

<div className="travel-container">
  {Eindhovendata.map((data, index) => (
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
