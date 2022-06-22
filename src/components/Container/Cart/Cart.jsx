import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

import { useCartContext } from "../../../context/CartContex"
import { Carousels } from "../../Carousel/Carousels"
import { Formulario } from "../../Formulario/Formulario"

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
          <Carousels/>
        </div>

        :
        <>
          <div className="col-md-8 tables">
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
                {cartList.map(car =>

                  <tr key={car.id}>
                    <td ><img src={car.imagenCart} className="image"></img> {car.producto} </td>
                    <td className="texto">{car.cantidad}</td>
                    <td>{car.precio}</td>
                    <td>  <button className="btn btn-danger" onClick={() => removerItem(car.id)}>X</button>  </td>
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
      {cartList.length !== 0 &&

        <Formulario />


      }

    </div>

  )
}


