import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-detail">
            <h3>Contact Us From  Here</h3>
            <p>You can contact us from here, you can write to us, 
                call us or visit our service center, 
                we will gladly assist you.</p>
        </div>
        <div className='details'>
            <ul>
                <li>Telephone: <span>858-859-585</span></li>
                <li>Email: <span>delivery@gamil.com</span> </li>
                <li>Location: <span>Kenya</span></li>
            </ul>
        </div>
        <button className='btn'>Contact Us</button>
    </div>
  )
}

export default Contact