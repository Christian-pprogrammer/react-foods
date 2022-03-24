import React from 'react'
import { Link } from 'react-router-dom'
import Faster from './faster/Faster'
import HappyCustomer from './happy-customer/HappyCustomer'
import Person from '../../assets/person.png';
import { FaPlayCircle } from 'react-icons/fa';
import './HomeMain.css'

function HomeMain() {
  return (
    <div id="main-container">
        <div id="details">
            <Faster />
            <h1 className="main-content">
                Be The Fastest In Delivering Your <span>Food</span>
            </h1>
            <p className='our-job'>
                Our job is to filling your tummy with delicious food
                and with fast and free delivery
            </p>
            <div>
                <Link to="/" className='login-button' style={{display: 'inline-block' ,margin: '20px 0px'}} >Get Started</Link>
                <button className='watch-video login-button'><FaPlayCircle /> Watch Vieo</button>
            </div>
            <HappyCustomer />
        </div>
        <div id="thumbnail">
            <img className='thumbnail-img' src={Person} />
        </div>
    </div>
  )
}

export default HomeMain