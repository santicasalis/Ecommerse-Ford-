
import React, { useEffect, useState } from 'react'
import { Detalle } from '../ItemDetail/Detalle'

const vehiculo = {id:"11", categoria:"autos", producto:"Mustang",precio:"80.000", stock:1, imagen:"https://www.ar.ford.com/manual/img/mustang.jpg", descripcion:"Nuevo Mustang Match V8 5.0L  AT "}

const getFetch = new Promise((resolve)=>{
    setTimeout(() => {
      resolve (vehiculo)
    }, 3000)
    
    })
    



const DetalleContainer = () => {
    const [vehiculo, setVehiculo] = useState({})
    
    useEffect(() => {
       getFetch
       .then(respuesta=>setVehiculo(respuesta))
       .catch(error =>console.log(error))
           
    }, [])
    
    return (
        <div>
            <Detalle vehiculo={vehiculo} />
        </div>
    )
}

export default DetalleContainer