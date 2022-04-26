import React from 'react'

const Card = (props) => {
  const{cardType, children} = props
  return (
    <div className={`card ${cardType==="overflow-number"?"card--overflow-number":""}`}>
        <div className='card__inner'>
          {
           children
          }
        </div>
    </div>
  )
}

export default Card