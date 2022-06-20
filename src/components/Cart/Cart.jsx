import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"

import { useState } from "react"
import { Table } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContex"
import "./cart.css"

export const Cart = () => {
  
 const [dataFormulario, setDataFormulario]= useState({email: "", telefono: "",  nombre: ""})
 const { cartList, vaciarCarrito, removerItem, precioTotal } = useCartContext()
    
 async function generarOrden(e) {
     e.preventDefault()
    let ordenDeCompra = {}
   
    ordenDeCompra.comprador=dataFormulario
    ordenDeCompra.total = precioTotal()
    
    ordenDeCompra.items = cartList.map(vehiculo => {
      const id = vehiculo.id
      const nombre = vehiculo.producto
      const precio = vehiculo.precio
      const cantidad=vehiculo.cantidad 
      const dia= new Date()
      return { id, nombre, precio, cantidad, dia }

    })
    const db = getFirestore()
    const queryCollection = collection(db, "ordenes")
    addDoc(queryCollection, ordenDeCompra)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
      .finally(() => vaciarCarrito())
      
      
      const queryCollectionStock = collection(db, 'vehiculos')

      const queryActulizarStock =  query(
          queryCollectionStock,                    
          where( documentId() , 'in', cartList.map(vehiculo => vehiculo.id) )         
      )

     const batch = writeBatch(db)

     await  getDocs(queryActulizarStock)
      .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(vehiculo => vehiculo.id === res.id).cantidad
      }) ))
      .finally(()=> alert('Compra realizada'))

      batch.commit()


  }




  const handlerChange = (e) => {
    setDataFormulario({
        ...dataFormulario,
        [e.target.name]: e.target.value
    })
}

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
              
                    <form 
                        className='form-control '
                        onSubmit={generarOrden}  >
                                    
                        <input 
                            className='form-control'
                            type='text' 
                            name='nombre' 
                            placeholder='Ingrese el nombre' 
                            value={dataFormulario.nombre}
                            
                            onChange={handlerChange}
                        /><br />
                        <input 
                            className='form-control'
                            type='text' 
                            name='telefono'
                            placeholder='Ingrese el telefono' 
                            value={dataFormulario.telefono}
                            onChange={handlerChange}
                        /><br/>
                        <input 
                            className='form-control'
                            type='email' 
                            name='email'
                            placeholder='Ingrese el email' 
                            value={dataFormulario.email}
                            onChange={handlerChange}
                        /><br/>
                        <input 
                            className='form-control'
                            type='email' 
                            name='email1'
                            placeholder='repita email' 
                            value={dataFormulario.email}
                            onChange={handlerChange}
                        /><br/>
                        
                        
            <button className="btn btn-primary" onClick={generarOrden}> Finalizar Compra</button>
          
                    </form>
                

            }

    </div>

  )
}


