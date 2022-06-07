import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Table } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContex"
import "./cart.css"

export const Cart = () => {
  const { cartList, vaciarCarrito, removerItem, precioTotal} = useCartContext()
 function generarOrden(){
  let ordenDeCompra= {}
  ordenDeCompra.comprador={nombre:"Santiago", telefono:"1153492473", corre:"santicasalis@gmail.com"}
  ordenDeCompra.total= precioTotal()
  ordenDeCompra.items=cartList.map(vehiculo=>{
    const id=vehiculo.id
    const nombre=vehiculo.producto
    const precio= vehiculo.precio * vehiculo.cuantity    
    return {id,nombre,precio}

  })
  const db = getFirestore()
  const queryCollection=collection (db,"ordenes")
  addDoc(queryCollection, ordenDeCompra)
  .then(resp=>console.log(resp))
  .catch(err=>console.log(err))
  .finally(()=>vaciarCarrito())
}
  return (
 <div className="col-md-12">
    {cartList.length===0? 
 <div>
 <h3> El carrito se encuentra vacío</h3>
 <Link to='/'>
 <button className="btn btn-primary"> Ver vehiculos</button>
 </Link>
 </div>

:
   <>
      <div className="col-md-8 tabla">
      <Table  responsive bordered hover>
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
      <td ><img src={vehiculo.imagenCart}className="imagen"></img> {vehiculo.producto} </td>
      <td className="texto">{vehiculo.cantidad}</td>
      <td>{vehiculo.precio}</td>
      <td>  <button className="btn btn-danger" onClick={()=>removerItem(vehiculo.id)}>X</button>  </td>
     </tr>
   
    )
  
    }
    <tr>
    <td colSpan={4}>Total= USS$ {precioTotal()}</td>
    </tr>
    </tbody>
    
</Table>
</div>
<Link to='/'>
<button className="btn btn-primary" onClick={generarOrden}> Finalizar Compra</button>
</Link>
<button className="btn btn-primary" onClick={vaciarCarrito}> Vaciar carrito</button>
</>
}
</div>
      
  )
}


