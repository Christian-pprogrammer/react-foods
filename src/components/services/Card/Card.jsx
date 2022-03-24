import React from 'react'

function Card({img, sentence}) {
  return (
    <div>
      <img src={img} />
      <h3>{sentence}</h3>
    </div>
  )
}

export default Card