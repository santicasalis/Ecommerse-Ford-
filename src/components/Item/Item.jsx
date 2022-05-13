import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"
import { Button} from "react-bootstrap"
import { Container,Col,Row} from "react-bootstrap"

export const Item = ({id , categoria, imagen, precio  } )   => {
  return (
    <Container>
    <Row  >
    <Col  lg="4" >
  <Card className="mt-4 " border="primary" >

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
       <Button className="btn-sm" variant="primary" active>Detalles</Button>
 
    </Card.Body>
</Card>
</Col>
</Row>
</Container>
  )
}
