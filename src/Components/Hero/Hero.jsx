import React from 'react'
import './Hero.css'
import home from '../../assets/home-ilustration.svg'
const Hero = () => {
  return (
    <div className='hero'>
  <div className='hero-title'>
    <h3>Order Products  Faster Easier</h3>
    <p>Order your favorite foods at any time and we will 
        deliver them right to where you are.
    </p>
    <button className='btn'>Get Started</button>
  </div>
  <div>
    <img src={home} alt="icon"  className='home-img'/>
  </div>
    </div>
  );
}

export default Hero