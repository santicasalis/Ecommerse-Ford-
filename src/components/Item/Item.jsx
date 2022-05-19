import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"
import { Button} from "react-bootstrap"
import { Link } from "react-router-dom"


export const Item = ({vehiculo } )   => {
  return (
      
   <div className='col-md-3'>
   
  <Card className="mt-2" border="primary" >
   key={vehiculo.id}  
<Link to={`/detalle/${vehiculo.id}`}>
  <Card.Img  variant="top"  src={vehiculo.imagen} />
     <Card.Body>
           <Card.Subtitle className="mb-2 text-muted"> 
      {vehiculo.descripcion}
         </Card.Subtitle>
    </Card.Body>
     <ListGroup className="list-group-flush">
        <ListGroupItem>Precio:US${vehiculo.precio}</ListGroupItem>

     </ListGroup>
    <Card.Body>
    
       <Button className="btn-sm" variant="primary" active>Comprar</Button>{' '}
       <a href="DetalleContainer"><Button className="btn-sm" variant="primary" active>Detalles</Button> </a>
 
    </Card.Body>
    </Link>
</Card>
 
</div> 

  )
}
