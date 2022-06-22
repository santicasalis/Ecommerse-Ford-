import React, { useState } from 'react'

import "./itemCount.css"


export const ItemCount = ({ stock, inicio, onAdd }) => {



  const [cuantity, setCuantity] = useState(inicio)
  const rest = () => {

    if (cuantity > 1) {
      setCuantity(cuantity - 1)
    }
  }

  const addition = () => {
    if (cuantity < stock) {
      setCuantity(cuantity + 1)
    }
  }


  return (
    <div className=' divs' >

      <div >
        <button className="btn btn-primary botones" type='button' onClick={rest}>-</button>
        <h5 className='botones'>{cuantity}</h5>
        <button className="btn btn-primary botones" type='button' onClick={addition}>+</button>
      </div>

      <br />

      <button className="btn btn-primary" onClick={() => onAdd(cuantity)}>
        Añadir al carrito </button>




    </div>
  )
}