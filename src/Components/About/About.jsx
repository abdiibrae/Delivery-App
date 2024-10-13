import React from 'react'
import './About.css'
import about_img from '../../assets/about-ilustration.svg'
const About = () => {
  return (
    <div className='About'>
      <div>
        <img src={about_img} alt="" className='about-img' />
      </div>
      <div className='about-desc'>
        <h2>Find Out A Little More About Us</h2>
        <p>We are a company dedicated to the distribution of products by delivery 
       to your home or to the place where you are, with the best quality of delivery.
      </p>
      </div>
    </div>
  )
}

export default About