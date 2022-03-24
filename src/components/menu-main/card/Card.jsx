import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
// import Italian '';

function Card({img, title, price}) {
  return (
    <div className='menu-card'>
      <div className='overlay'>
        <h3>Italian Pizza</h3>
        <p>$ 1.56</p>
        <Link to ='/add'>Add to meal</Link>
      </div>
    </div>
  )
}

export default Card