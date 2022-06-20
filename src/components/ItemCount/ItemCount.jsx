import React, { useState } from 'react'

import "./itemCount.css"


export const ItemCount = ({stock, inicio, onAdd}) => {
  


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
 
   
  return (
<div className='col-md-6 divs' >
      
        <div >
        <button className="btn btn-primary botones" type='button' onClick={resta}>-</button>
        <h5 className='botones'>{cuantity}</h5> 
        <button className="btn btn-primary botones" type='button' onClick={suma}>+</button>
        </div>
        
      <br/>
    
      <button className="btn btn-primary"  onClick = {()=>onAdd(cuantity)}>
       Añadir al carrito </button>
         
 
    
   
    </div>
  )
  }