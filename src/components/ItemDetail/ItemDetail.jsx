import { useContext } from "react"
import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"
import { useCartContext } from "../../context/CartContex"
import { ItemCount } from "../ItemCount/ItemCount"

import "./itemDetail.css"




export const ItemDetail = ({vehiculo} )   => {
   

  const {addToCart, cartList} = useCartContext()
  
  
  const onAdd = (cant) => {
   
    addToCart( { ...vehiculo, cantidad: cant } )
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
   <ItemCount inicio={1} stock={vehiculo.stock} onAdd={onAdd} />

   </div>
</div> 
  )
}
