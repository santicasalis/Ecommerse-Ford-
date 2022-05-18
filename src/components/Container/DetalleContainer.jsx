
import  { useEffect, useState } from 'react'
import { Detalle } from '../ItemDetail/Detalle'

const vehiculo = {id:"11", categoria:"autos", producto:"Mustang",precio:"80.000", stock:1, imagen:"https://www.ford.com.ar/content/dam/Ford/website-assets/latam/ar/nameplate/mustang/mustang-2021/colorizer/negro-ebony/far-mustang-negro-ebony-.jpg.dam.full.high.jpg/1622062692550.jpg", descripcion:"Nuevo Mustang Match V8 5.0L  AT "}

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