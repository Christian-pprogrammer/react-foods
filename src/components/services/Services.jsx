import React from 'react'
import Card from './Card/Card'
import './Services.css'
import deliver from '../../assets/deliver.png';
import order from '../../assets/order.png';
import quality from '../../assets/quality.png';


function Services() {
  return (
    <div className='our-services'>
        <p className='what-we-serve'>WHAT WE SERVE</p>
        <h1>Your Favourite Food<br/>Delivery Partener</h1>
        <div className="about-services">
            <Card img={deliver} sentence="Easy to Order" />
            <Card img={order} sentence="Fastest delivery" />
            <Card img={quality} sentence="high quality" />
        </div>
    </div>
  )
}

export default Services