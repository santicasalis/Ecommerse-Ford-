import { Table } from "react-bootstrap"
import { useCartContext } from "../../context/CartContex"
import "./cart.css"

export const Cart = () => {
  const { cartList, vaciarCarrito} = useCartContext()

  return (
    <div className="col-md-8">
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
       
      <tr>
      <td ><img src={vehiculo.imagenCart}className="imagen"></img> {vehiculo.producto} </td>
      <td className="texto">{vehiculo.cantidad}</td>
      <td>{vehiculo.precio}</td>
      <td>  X   </td>
    </tr>
    )}
    
    </tbody>
</Table>
<button className="btn btn-primary" onClick={vaciarCarrito}> Vaciar carrito</button>
</div>
  )
}


