import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"

import { useState } from "react"
import { Table } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import Swal from "sweetalert2"

import { useCartContext } from "../../context/CartContex"
import { Formulario } from "../Formulario/Formulario"



import "./cart.css"


export const Cart = () => {
  
 
 const { cartList, vaciarCarrito, removerItem, precioTotal } = useCartContext()
   

 
  return (
    <div className="col-md-12">
      {cartList.length === 0 ?
        <div>
          <h3> El carrito se encuentra vacío</h3>
          <Link to='/'>
            <button className="btn btn-primary"> Ver vehiculos</button>
          </Link>
        </div>

        :
        <>
          <div className="col-md-8 tabla">
            <Table responsive bordered hover>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>X</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map(vehiculo =>

                  <tr key={vehiculo.id}>
                    <td ><img src={vehiculo.imagenCart} className="imagen"></img> {vehiculo.producto} </td>
                    <td className="texto">{vehiculo.cantidad}</td>
                    <td>{vehiculo.precio}</td>
                    <td>  <button className="btn btn-danger" onClick={() => removerItem(vehiculo.id)}>X</button>  </td>
                  </tr>

                )

                }
                <tr>
                  <td colSpan={4}>Total= USS$ {precioTotal()}</td>
                </tr>
              </tbody>

            </Table>
          </div>
         
          <button className="btn btn-primary" onClick={vaciarCarrito}> Vaciar carrito</button>
        </>
      }
       { cartList.length !== 0 &&
              
                   <Formulario/>
                

            }

    </div>

  )
}


