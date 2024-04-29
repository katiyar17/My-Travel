import React from 'react'
import { Thesquaremiledata } from './Thesquaremiledata'
import { Link } from 'react-router-dom'
export default function Thesquaremile() {
  return (
    <div>

<h1  className='usaheading'>The Square Mile</h1>
 
<Link to="/london" class="btn  btn-secondary">Back</Link>
 
 <div className="travel-container">
   {Thesquaremiledata.map((data, index) => (
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
