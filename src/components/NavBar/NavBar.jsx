import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContex";

import CardWidget from "../CardWidget/CardWidget";


import "./navBar.css"



const categorias = [
  { id: '1', ruta: 'autos', boton: 'Autos' },
  { id: '2', ruta: 'suv', boton: 'Suvs' },
  { id: '3', ruta: 'pick-up', boton: 'Pick-Ups' },
  { id: '4', ruta: 'electrico', boton: 'Electricos' },
]



const NavBar = () => {
  const { cantidadTotal } = useCartContext()

  return (

    <Navbar collapseOnSelect expand="lg" bg="primary"  variant="dark">
      <Container >
        <Link to='/'>
          <img className="logo d-inline-block align-top" src="https://www.ar.ford.com/manual/img/logo.png"></img>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="categorias">

          {categorias.map(vehiculo => <NavLink className="filtros" key={vehiculo.id} to={`/categoria/${vehiculo.ruta}`}>{vehiculo.boton}</NavLink>)}
        </Nav>
        </Navbar.Collapse>
        <div className="fuente">
          {cantidadTotal() !== 0 && cantidadTotal()}
          <CardWidget />
        </div>
        
      </Container>
    </Navbar>

  )
}


export default NavBar