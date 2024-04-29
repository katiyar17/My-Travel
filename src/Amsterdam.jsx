import React from 'react'
import { Link } from 'react-router-dom'
export default function Amsterdam() {
  return (
    <div>
      <h1 className='usaheading' >Welcome to Amsterdam 🥂</h1>

<div className="image-container">
  <div className="image-card">
    <Link to="/rotterdam" className="image-button">Rotterdam</Link>
    <img
      className="destination-image"
      src="https://media.istockphoto.com/id/1216976371/photo/rotterdam-netherlands-skyline.jpg?s=612x612&w=0&k=20&c=J5oWAvz5-lnusjnbtz6bOuTyW2LLnXbhSOxv0QkNA_c="
       
    />
  </div>
  <div className="image-card">
    <Link to="/eindhoven" className="image-button">Eindhoven</Link>
    <img
      className="destination-image"
      src="https://media.istockphoto.com/id/458616455/photo/eindhoven-city-center-during-blue-hour.jpg?s=612x612&w=0&k=20&c=KZjK3i2H6KmjJi3BBpS0yF36m5bQt0r5MYn7VTbZ5xU="
      alt="Las Vegas skyline"
    />
  </div>
  <div className="image-card">
    <Link to="/denbosch" className="image-button">Den Bosch</Link>
    <img
      className="destination-image"
      src="https://media.istockphoto.com/id/2045362440/video/city-of-den-bosch-the-netherlands-view-of-the-modern-paleiskwartier-residential-district.jpg?s=640x640&k=20&c=r24HkAqtzHPqCqUgF_4vhlJiuePe3NDRoDzErqe_w8w="
      alt="California coast"
    />
  </div>
  
</div>
<Link to="/backtohome"  class="btn btn-secondary">Back</Link>
    </div>
  )
}
