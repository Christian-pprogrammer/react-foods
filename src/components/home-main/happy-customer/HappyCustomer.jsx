import React from 'react'
import { FaStar } from 'react-icons/fa';
import Happy from '../../../assets/happy.jpg';
import './HappyCustomer.css';

function HappyCustomer() {
  return (
    <div className='happy-customer-container'>
      <div className='happy-customer-div1'>
        <div className='happy-img-div div1'>
          <img src={Happy} alt="" /> 
        </div>
        <div className='happy-img-div div2'>
          <img src={Happy} alt="" />
        </div>
        <div className='happy-img-div div3'>
          <img src={Happy} alt="" />
        </div>
      </div>
      <div>
        <h3>Our happy customer</h3>
        <FaStar color="#fdc55e" />
        <b>4.8</b> (12.5k views)
      </div>
    </div>

  )
}

export default HappyCustomer