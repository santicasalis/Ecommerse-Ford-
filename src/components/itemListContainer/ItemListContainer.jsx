
import {useEffect , useState  } from "react"
import { Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { ListGroupItem } from "react-bootstrap"
import { Button} from "react-bootstrap"
import { Container,Col,Row} from "react-bootstrap"


const vehiculos = [
  {id:"1", categoria:"pick-up", producto:"Ranger", stock:10, precio:"10000", imagen:"https://www.ar.ford.com/manual/img/ranger.jpg", descripcion:"Nueva Ranger LIMITED  3.2L Cabina Doble 4X4 Diesel AT"},
  {id:"2", categoria:"pick-up", producto:"Maverick", stock:3, precio:"8000", imagen:"https://www.ar.ford.com/manual/img/maverick.jpg", descripcion:"Nueva Maverick Lariat 2.0 L 4X4 AT"},
  {id:"3", categoria:"pick-up", producto:"F-150 Raptor", stock:2, precio:"90.000", imagen:"https://www.ar.ford.com/manual/img/f-150-raptor.jpg", descripcion:"Nueva F-150 Raptor 3.5L 4x4 AT"},
  {id:"4", categoria:"suv", producto:"Bronco",precio:"15.000", stock:8, imagen:"https://www.ar.ford.com/manual/img/broncosport.jpg", descripcion:"Nueva Bronco WildTrack 2.0L 4X4 AT"},
  {id:"5", categoria:"suv", producto:"Territory",precio:"12.000", stock:1, imagen:"https://www.ar.ford.com/manual/img/territory.jpg", descripcion:"Nueva Territory 1.5L Turbo AT"},
  {id:"6", categoria:"electrico", producto:"Kuga",precio:"18.000", stock:3, imagen:"https://www.ar.ford.com/manual/img/nueva-kuga.jpg", descripcion:"Nueva Kuga Híbrida 2.5L Eléctrico auto-recargable "},
  {id:"7", categoria:"electrico", producto:"F-150",precio:"85.000", stock:2, imagen:"https://www.ar.ford.com/manual/img/f-150.jpg", descripcion:"Nueva F-150  3.5L V6 Híbrido 4x4 AT "},
  {id:"8", categoria:"autos", producto:"Mustang",precio:"80.000", stock:1, imagen:"https://www.ar.ford.com/manual/img/mustang.jpg", descripcion:"Nuevo Mustang Match V8 5.0L  AT "}

]


const getFetch = new Promise((resolve)=>{
setTimeout(() => {
  resolve (vehiculos)
}, 2000)

})



export const ItemListContainer = () => {
  const [vehiculos , setVehiculos]= useState([])

  useEffect(()=>{
getFetch
.then(respuesta=>setVehiculos(respuesta))
.catch((error)=>console.log(error))
.finally(()=>console.log("ss"))

  }, [])

  return (
    <div>
 {
   
  vehiculos.map((vehiculo)=>
  
  
  <Container>
    <Row className="justify-content-center">
    <Col  lg="4" >
  <Card className="mt-4" border="primary" >

  <Card.Img variant="top" src={vehiculo.imagen} />
     <Card.Body>
           <Card.Title>{vehiculo.producto}</Card.Title>
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

    </div>
  )
}








export default ItemListContainer






