import React from 'react'

export const Card = ({nameProduct,stateProduct,imgProduct}) => {
  return (
    <div className='card'>
      <h1>{nameProduct}</h1>
      <p>{stateProduct}</p>
      <img src={imgProduct} alt={nameProduct} />
    </div>
  )
}
