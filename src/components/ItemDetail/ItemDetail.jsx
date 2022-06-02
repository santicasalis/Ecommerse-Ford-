import { useContext, useState } from "react"
import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContex"
import { ItemCount } from "../ItemCount/ItemCount"

import "./itemDetail.css"




export const ItemDetail = ({vehiculo} )   => {
  const [ItemCountPush, setItemCountPush] = useState(true) 
  const {addToCart, cartList} = useCartContext()
  
  
 const onAdd = (cant) => {
   
    addToCart( { ...vehiculo, cantidad: cant } )
    setItemCountPush(false)
  }




  return (
  
   
    
   <div className='col-md-6 divs'> 

  <img  src={vehiculo.imagen} />
    
           <Card.Subtitle className="mb-2 text-muted">
      {vehiculo.descripcion}
         </Card.Subtitle>
    
     <ListGroup className="list-group-flush">
        <ListGroupItem>Precio:US${vehiculo.precio}</ListGroupItem>
        <ListGroupItem>Stock disponible: {vehiculo.stock}</ListGroupItem>

     </ListGroup>
  
   
   <div className='col-md-12'> 
   
   {ItemCountPush ? 
                    <ItemCount inicio={1} stock={vehiculo.stock} onAdd={onAdd}/> 
                    :  
                    <>
                        <Link to='/'>
                            <button className="btn btn-primary">Seguir Comprando</button>
                        </Link>
                        <Link to='/cart'>
                            <button className="btn btn-primary">Ir al carrito</button>
                        </Link>
                    </>
                }
   </div>
</div> 
  )
}
