import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

import ItemList from "../../ItemList/ItemList"

import "./itemListContainer.css"
import { Load } from "../../Spinner/Spinner"


export const ItemListContainer = () => {
    const [vehiculos, setVehiculos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        if (id) {
            const queryCollection = collection(db, "vehiculos")
            const queryCollectionFilter = query(queryCollection, where("categoria", "==", id))
            getDocs(queryCollectionFilter)
                .then(resp => setVehiculos(resp.docs.map(vehiculo => ({ id: vehiculo.id, ...vehiculo.data() }))))
                .catch((err) => console.log(err))
                .finally(()=>setLoading(false)) 
        } else {
            const queryCollection = collection(db, "vehiculos")
            getDocs(queryCollection)
                .then(resp => setVehiculos(resp.docs.map(vehiculo => ({ id: vehiculo.id, ...vehiculo.data() }))))
                .catch((err) => console.log(err))
                .finally(()=>setLoading(false))  

        }
    }, [id])

    return (
        <div>

            {
                loading ?
                <Load/>
                :
                <div className="espacio" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <ItemList vehiculos={vehiculos} />
                </div>
            }


        </div>

    )
}

