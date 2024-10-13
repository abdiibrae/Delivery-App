import React from 'react'
import './Footer.css'
import social_icon1 from '../../assets/facebook-fill.svg'
import social_icon2 from '../../assets/instagram-line.svg'
import social_icon3 from '../../assets/twitter-x-line.svg'
const Footer = () => {
  return (
    <div className='footer'>
        
        <div className="footer-desc container">
        <div className='top'>
            <h2>Delivery</h2>
            <span>Order Products Faster  Easier</span>
        </div>
        <div>

            <h2>Our Services</h2>
            <ul>
                <li><span>Pricing</span></li>
                <li><span>Report a bug</span></li>
                <li><span>Terms of Service</span></li>
            </ul>
        </div>
        <div>
            <h2>Our Company</h2>
            <ul>
                <li><span>Blog</span></li>
                <li><span>Our mision</span></li>
                <li><span>Get in touch</span></li>
            </ul>
        </div>
        <div>
            <h2>Community</h2>
            <ul>
                <li><span>Support</span></li>
                <li><span>Questions</span></li>
                <li><span>Customer help</span></li>
            </ul>
        </div>
        <div className='social-icon'>
            <ul>
                <li><img src={social_icon1} alt="socialmediaicon"  className='social-links'/></li>
                <li><img src={social_icon2} alt="socialmediaicon"  className='social-links'/></li>
                <li><img src={social_icon3} alt="socialmediaicon"  className='social-links'/></li>
            </ul>
        </div>
        </div>
        <div className='end'>
        <span >&#169; SourceCodeGuy-All righ reserved</span>
        </div>
       
    </div>
  )
}

export default Footer