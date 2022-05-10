
import React, { useState } from 'react'


export const ItemCount = ({stock, inicio, onAdd}) => {

    const [cuantity, setCuantity] = useState(inicio)
    const resta=()=> {
      // cuantity>1? setCuantity(cuantity - 1) }
      if(cuantity >1){
          setCuantity(cuantity - 1 )
      }
    }

    const suma =() =>{
        if (cuantity < stock){
            setCuantity(cuantity + 1)
        }
    }
    const onClick = () => { onAdd  }
  return (
<section className='carrito' >
      <ul >
        <li><button type='button' onClick={resta}>-</button></li>
        <li>{cuantity}</li>
        <li><button type='button' onClick={suma}>+</button></li>
      </ul>
      <button  type='submit' value={cuantity} onClick = { onClick }>
        Añadir al carrito
      </button>
    </section>
  )
  }