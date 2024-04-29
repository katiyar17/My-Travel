import React from 'react';
import { Link } from 'react-router-dom'; 
 
export default function About() {
    return (
        <div>
            <span className='ab'> <h1>Welcome to About Section 🤔 </h1></span>

            <div className='ab-container'>
            <div class="button-container">
  <Link to="/travel-guide" class="btn btn-danger">Travel-Guide</Link>
  <Link to="/safety-guide" class="btn btn-warning">Safety-Guide</Link>
</div>

            </div>  
            <Link to="/backtohome"  class="btn-v btn-secondary">Back</Link>
        </div>
    );
}
