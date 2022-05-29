import { useCartContext } from "../../context/CartContex"

const Cart = () => {
  const { cartList, vaciarCarrito} = useCartContext()

  return (
    <div>
      {cartList.map(vehiculo => <li> <img src={vehiculo.imagen}  alt="" />{vehiculo.producto} - price: {vehiculo.precio} - cantidad: {vehiculo.cantidad}</li> )}
     <button className="btn btn-primary" onClick={vaciarCarrito}> Vaciar carrito</button>
    </div>
  )
}

export default Cart