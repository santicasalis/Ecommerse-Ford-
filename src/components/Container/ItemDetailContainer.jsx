import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../array/getFetch'
import { ItemCount } from '../ItemCount/ItemCount'
import {  ItemDetail } from '../ItemDetail/ItemDetail'
import { OpcionesButton } from '../OpcionesButton/OpcionesButton'
import "./itemDetailContainer.css"


export const ItemDetailContainer = () => {
    const [vehiculo, setvehiculo] = useState({})
    const { detalleId } = useParams()

    useEffect(() => {
        getFetch(detalleId)   
        .then(respuesta=> setvehiculo(respuesta))
        .catch((err)=> console.log(err))
          
    }, [])
    
  
    return (
        <div >
            <ItemDetail vehiculo={vehiculo}  />
            <ItemCount inicio={1} stock={vehiculo.stock}  />
            <OpcionesButton />
        </div>
    )
}

