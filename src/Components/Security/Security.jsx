import React from 'react'
import './Security.css'
import security_img from '../../assets/security-ilustration.svg'

const Security = () => {
  return (
    <div className='security'>
     <div className='security-desc'>
        <h2>Your Safety Is  Important</h2>
        <p>When your order reaches you, we have the health safety protocols, 
         so that you are protected from any disease. Watch the video of how the 
         delivery is made.
         </p>
     </div>
     <div>
          <img src={security_img} alt="securityimg"  className='security-img'/>
     </div>
    </div>
  )
}

export default Security