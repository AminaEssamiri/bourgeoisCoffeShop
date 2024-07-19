import React from 'react';
import './NewsLetter.css';
const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Obtenez Des Offres Exclusives</h1>
            <h1>Sur Votre Email</h1>
            <div>
                <input type="email" placeholder='Your Email' /> 
                <button>Subscribe</button>
            </div> 
        </div>
    );
};

export default NewsLetter;