
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import React, { useState } from 'react'
import Swal from "sweetalert"

import { useCartContext } from "../../context/CartContex"

export function Formulario() {
    const [dataFormulario, setDataFormulario] = useState({ email: "", telefono: "", nombre: "" })
    const { cartList, vaciarCarrito, precioTotal } = useCartContext()
    async function generarOrden(e) {
        e.preventDefault()
        let ordenDeCompra = {}

        ordenDeCompra.comprador = dataFormulario
        ordenDeCompra.total = precioTotal()

        ordenDeCompra.items = cartList.map(vehiculo => {
            const id = vehiculo.id
            const nombre = vehiculo.producto
            const precio = vehiculo.precio
            const cantidad = vehiculo.cantidad
            const dia = new Date()
            return { id, nombre, precio, cantidad, dia }

        })
        const db = getFirestore()
        const queryCollection = collection(db, "ordenes")
        addDoc(queryCollection, ordenDeCompra)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
            .finally(() => vaciarCarrito())


        const queryCollectionStock = collection(db, 'vehiculos')

        const queryActulizarStock = query(
            queryCollectionStock,
            where(documentId(), 'in', cartList.map(vehiculo => vehiculo.id))
        )

        const batch = writeBatch(db)

        await getDocs(queryActulizarStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(vehiculo => vehiculo.id === res.id).cantidad
            })))
            .finally(() => Swal({
                title: "Su compra se realizó con éxito",
                icon: "success",
                text:'su código es fgrkvhvtjrrvbmkdx58',
                showConfirmButton: true,

            })


            )

        batch.commit()


    }




    const handlerChange = (e) => {
        setDataFormulario({
            ...dataFormulario,
            [e.target.name]: e.target.value
        })
    }


    return (


        <form

            onSubmit={generarOrden}  >

            <input required
                className='form-control'
                type='text'

                name='nombre'
                placeholder='Ingrese el nombre'
                value={dataFormulario.nombre}
                onChange={handlerChange}

            /><br />
            <input

                required
                className='form-control'
                type='text'
                name='telefono'
                placeholder='Ingrese el telefono'
                value={dataFormulario.telefono}
                onChange={handlerChange}

            /><br />
            <input
                className='form-control'
                type='email'
                required
                name='email'
                placeholder='Ingrese el email'
                value={dataFormulario.email}
                onChange={handlerChange}

            /><br />
            <input
                className='form-control'
                type='email'
                required
                name='email1'
                placeholder='repita email'
                value={dataFormulario.email}
                onChange={handlerChange}

            /><br />


            <button type="submit" className="btn btn-primary" onClick={generarOrden}> Finalizar Compra</button>

        </form>


    )
}

