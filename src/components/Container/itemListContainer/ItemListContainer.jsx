import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

import ItemList from "../../ItemList/ItemList"

import "./itemListContainer.css"
import { Load } from "../../Spinner/Spinner"


export const ItemListContainer = () => {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const queryCollection = collection(db, "vehiculos")
        const queryCollectionFilter = id ? query(queryCollection, where("categoria", "==", id)) :
            queryCollection
        getDocs(queryCollectionFilter)
            .then(resp => setCars(resp.docs.map(car => ({ id: car.id, ...car.data() }))))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))


    }, [id])

    return (
        <div>

            {
                loading ?
                    <Load />
                    :
                    <div className="space" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <ItemList cars={cars} />
                    </div>
            }


        </div>

    )
}

