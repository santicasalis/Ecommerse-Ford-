import { useCartContext } from "../../context/CartContex"


export const Cart = (vehiculo) => {
  const {cartList}=useCartContext()
  return (
    <div>
      <h1>Cart</h1>
      {cartList.map(vehiculo=> <li>{vehiculo.producto}- precio: {vehiculo.precio}</li>)

      }


    </div>
  )
}
