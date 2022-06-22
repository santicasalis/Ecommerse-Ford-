import { useState } from "react"
import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContex"

import { ItemCount } from "../ItemCount/ItemCount"

import "./itemDetail.css"

export const ItemDetail = ({ car }) => {
  const [ItemCountPush, setItemCountPush] = useState(true)
  const { addToCart } = useCartContext()


  const onAdd = (cant) => {

    addToCart({ ...car, cantidad: cant })
    setItemCountPush(false)
  }

  return (


    <div >
      <div className=''>
        <img src={car.imagen} />

        <Card.Subtitle className="mb-2 text-muted">
          {car.descripcion}
        </Card.Subtitle>

        <ListGroup className="list-group-flush">
          <ListGroupItem>Precio:US${car.precio}</ListGroupItem>
          <ListGroupItem>Stock disponible: {car.stock}</ListGroupItem>



        </ListGroup>
      </div>
      <div>
        {ItemCountPush ?
          <ItemCount inicio={1} stock={car.stock} onAdd={onAdd} />
          :
          <>
            <Link to='/'>
              <button className="btn btn-primary boton">Seguir Comprando</button>
            </Link>
            <Link to='/cart'>
              <button className="btn btn-primary boton">Ir al carrito</button>
            </Link>
          </>
        }</div>


    </div>
  )
}
