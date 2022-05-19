import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"
import Boton from "../itemListContainer/Boton"



export const ItemDetail = ({vehiculo} )   => {
   
  return (
   <div className='col-md-12'>
      


  <img  src={vehiculo.imagen} />
    
           <Card.Subtitle className="mb-2 text-muted">
      {vehiculo.descripcion}
         </Card.Subtitle>
    
     <ListGroup className="list-group-flush">
        <ListGroupItem>Precio:US${vehiculo.precio}</ListGroupItem>
        <ListGroupItem>Stock disponible:{vehiculo.stock}</ListGroupItem>

     </ListGroup>
   <Boton/>

</div> 
  )
}
