import React from 'react'
import './Services.css'
import service1 from '../../assets/services1-ilustration.svg'
import service2 from '../../assets/services2-ilustration.svg'
import service3 from '../../assets/services3-ilustration.svg'
const Services = () => {
  return (
    <div className='services'>
      <div className="box">
        <h3>Payment Done</h3>
        <img src={service1} alt="serviceimg" className='service-img' />
        <p>Pay with a Visa or PayPal card and without much ado.</p>
        <span>Learn More</span>
      </div>
      <div className="box">
        <h3>Find Your Product</h3>
        <img src={service2} alt="serviceimg" className='service-img' />
        <p>We offer sale of products through the Internet.</p>
        <span>Learn More</span>
      </div>
      <div className="box">
        <h3>Product Received</h3>
        <img src={service3} alt="serviceimg" className='service-img' />
        <p>In our app you can see the delay time of your order..</p>
        <span>Learn More</span>
      </div>
    </div>
  )
}

export default Services
