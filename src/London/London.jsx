import React from 'react'
import { Link } from 'react-router-dom'
export default function London() {
  return (
    <div>
       <h1 className='usaheading' >Welcome to London ❤️</h1>

     

<div className="image-container">
  <div className="image-card">
    <Link to="/islington" className="image-button">Islington</Link>
    <img
      className="destination-image"
      src="https://media.istockphoto.com/id/1366773523/photo/camden-passage-london-england-uk.jpg?s=612x612&w=0&k=20&c=Te3Hn01iH6BWBj2gfMKiEyBVZhXWWzW0uQEdmo7V1UY="
      
    />
  </div>
  <div className="image-card">
    <Link to="/thesquaremile" className="image-button">The-Square-Mile</Link>
    <img
      className="destination-image"
      src="https://media.istockphoto.com/id/1405211353/photo/the-skyline-of-the-city-of-london-also-called-the-square-mile-in-london-united-kingdom-at.jpg?s=612x612&w=0&k=20&c=wnw_WuBx5az6sQ3tZiJbL4k4fcMTuDPX1uwOnVf266Y="
      
    />
  </div>
  <div className="image-card">
    <Link to="/bromley" className="image-button">Bromley</Link>
    <img
      className="destination-image"
      src="https://media.istockphoto.com/id/485565302/photo/crystal-palace-park.jpg?s=612x612&w=0&k=20&c=e4FYPC95K0CjdF1mVXU5G5G5tG84n_Advd-ThW1F-QY="
       
    />
  </div>
  
</div>
<Link to="/backtohome"  class="btn btn-secondary">Back</Link>
    </div>
  )
}
