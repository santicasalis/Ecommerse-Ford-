import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"
import { Link } from "react-router-dom"

import "./item.css"

export const Item = ({ car }) => {

  return (

    <div className='col-md-3 itemCar'>

      <Card className="mt-2 cart" border="primary" >

        <Link to={`/detalle/${car.id}`} className="decoration">
          <Card.Img variant="top" src={car.imagen} />
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              {car.descripcion}
            </Card.Subtitle>
          </Card.Body>
          <ListGroup className="list-group-flush ">
            <ListGroupItem >Precio:US${car.precio}</ListGroupItem>

          </ListGroup>
        </Link>


      </Card>

    </div>

  )
}
