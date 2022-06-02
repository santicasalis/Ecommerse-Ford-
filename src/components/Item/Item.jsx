import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./item.css"

export const Item = ({ vehiculo }) => {
  return (

    <div className='col-md-3 itemVehiculo' key={vehiculo.id} >

      <Card className="mt-2 carta" border="primary" >

        <Link className="decoracion" to={`/detalle/${vehiculo.id}`}>
          <Card.Img variant="top" src={vehiculo.imagen} />
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              {vehiculo.descripcion}
            </Card.Subtitle>
          </Card.Body>
          <ListGroup className="list-group-flush ">
            <ListGroupItem >Precio:US${vehiculo.precio}</ListGroupItem>

          </ListGroup>
        </Link>


      </Card>

    </div>

  )
}
