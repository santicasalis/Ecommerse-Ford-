import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import "./itemDetailContainer.css"


export const ItemDetailContainer = () => {
    const [vehiculo, setVehiculo] = useState({})
    const { detalleId } = useParams()



    useEffect(() => {
        const db = getFirestore()
        const dbQuery = doc(db, "vehiculos", detalleId)
        getDoc(dbQuery)
            .then(resp => setVehiculo({ id: resp.id, ...resp.data() }))
            .catch(err => console.log(err))

    }, [])
    return (
        <div className='espacio'>
            <ItemDetail vehiculo={vehiculo} />

        </div>
    )
}

