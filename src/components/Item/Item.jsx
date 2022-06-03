import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./item.css"

export const Item = ({ vehiculo }) => {
  console.log(vehiculo);
  return (

    <div className='col-md-3 itemVehiculo'>

      <Card className="mt-2 carta" border="primary" >

        <Link to={`/detalle/${vehiculo.id}`}className="decoracion">
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
