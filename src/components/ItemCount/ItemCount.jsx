
import React, { useState } from 'react'
import "./itemCount.css"


export const ItemCount = ({stock, inicio}) => {

    const [cuantity, setCuantity] = useState(inicio)
    const resta=()=> {
     
      if(cuantity >1){
          setCuantity(cuantity - 1 )
      }
    }
 
    const suma =() =>{
        if (cuantity < stock){
           setCuantity(cuantity + 1) 
        }
    }
    const onClick = () => { console.log(cuantity); }
  return (
<div className='col-md-6 divs' >
      
        <div >
        <button className="btn btn-primary botones" type='button' onClick={resta}>-</button>
        <h5 className='botones'>{cuantity}</h5> 
        <button className="btn btn-primary botones" type='button' onClick={suma}>+</button>
        </div>
        
      <br/>
      
     {// <button className="btn btn-primary"  type='submit' value={cuantity} onClick = { onClick }>
      //  Añadir al carrito
     // </button> 
    }
    </div>
  )
  }