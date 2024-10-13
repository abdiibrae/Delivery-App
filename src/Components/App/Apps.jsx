import React from 'react'
import './App.css'
import apps from '../../assets/app-ilustration.svg'
import playstore_icon from '../../assets/google-play-fill.svg'
import appstore_icon from '../../assets/app-store-line.svg'
const Apps = () => {
  return (
    <div className='app'>
        <div>
            <img src={apps} alt="appicon" className='app-icon' />
        </div>
        <div className='app-desc'>
            <h2>Watch Your Delivery At Any Time</h2>
            <p>With our app you can view the route of your order, from our local headquarters to the 
           place where you are. Look for the app now!</p>
           <div className='buttons'>
           <button className='btn'><img src={appstore_icon} alt="appstoreicon"  className='appstore-icon'/>App Store</button> 
            <button className='btn'><img src={playstore_icon} alt="playstoreicon" className='appstore-icon' />Google play</button>
           </div>
          
        </div>

    </div>
  )
}

export default Apps