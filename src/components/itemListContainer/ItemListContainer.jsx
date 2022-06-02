import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import { getFetch } from "../../array/getFetch"
import "./itemListContainer.css"
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

export const ItemListContainer = () => {
    const [vehiculos, setVehiculos] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const db = getFirestore()
        if (id) {
            const queryCollection = collection(db, "vehiculos")
            const queryCollectionFilter = query(queryCollection, where("categoria", "==", id))
            getDocs(queryCollectionFilter)
                .then(resp => setVehiculos(resp.docs.map(vehiculo => ({ id: resp.id, ...vehiculo.data() }))))
                .catch((err) => console.log(err))
        } else {
            const queryCollection = collection(db, "vehiculos")
            getDocs(queryCollection)
                .then(resp => setVehiculos(resp.docs.map(vehiculo => ({ id: resp.id, ...vehiculo.data() }))))
                .catch((err) => console.log(err))


        }
    }, [id])









    return (
        <div>

            {
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <ItemList vehiculos={vehiculos} />
                </div>
            }


        </div>

    )
}

