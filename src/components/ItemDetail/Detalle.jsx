import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"



export const Detalle = ({vehiculo} )   => {
   
  return (
   <div className='col-md-3'>
      
  <Card className="mt-2" border="primary" >

  <Card.Img  variant="top"  src={vehiculo.imagen} />
     <Card.Body>
           <Card.Subtitle className="mb-2 text-muted">
      {vehiculo.descripcion}
         </Card.Subtitle>
    </Card.Body>
     <ListGroup className="list-group-flush">
        <ListGroupItem>Precio:US${vehiculo.precio}</ListGroupItem>
        <ListGroupItem>Stock disponible:{vehiculo.stock}</ListGroupItem>

     </ListGroup>
   
</Card>
</div> 
  )
}
