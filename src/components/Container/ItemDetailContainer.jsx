import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../array/getFetch'
import {  ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const [vehiculo, setvehiculo] = useState({})
    const { detalleId } = useParams()

    useEffect(() => {
        getFetch(detalleId)   
        .then(respuesta=> setvehiculo(respuesta))
        .catch((err)=> console.log(err))
          
    }, [])
    
    return (
        <div>
            <ItemDetail vehiculo={vehiculo}  />
            
        </div>
    )
}

