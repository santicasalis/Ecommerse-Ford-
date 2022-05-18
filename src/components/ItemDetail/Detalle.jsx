import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"
import { Button} from "react-bootstrap"


export const Detalle = ( )   => {
    const vehiculo = {id:"11", categoria:"autos", producto:"Mustang",precio:"80.000", stock:1, imagen:"https://www.ar.ford.com/manual/img/mustang.jpg", descripcion:"Nuevo Mustang Match V8 5.0L  AT "}
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
