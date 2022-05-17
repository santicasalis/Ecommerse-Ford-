import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ItemDetail} from '../../components/ItemDetail'
import {baseArray} from '../../components'




const ItemDetailContainer = () => {
    const [vehiculos, setVehiculos] = useState({})
    const { detalleId } = useParams()

    useEffect(() => {
        baseArray(detalleId)  
        .then(respuesta=> setVehiculos(respuesta))
        .catch((error)=> console.log(error))
        
    }, [])
    
    return (
        <div>
            <ItemDetail vehiculos={vehiculos} />
        </div>
    )
}

export default ItemDetailContainer