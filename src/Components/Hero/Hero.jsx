import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <div>
                    <div className="hero-hand-icon">
                        <h2>NOUVEAUTÉS SEULEMENT</h2>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Découvrez nos offres spéciales</p>
                    <p>Pour tout le monde</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Dernière offre</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt='' />
            </div>
        </div>
    );
};

export default Hero;