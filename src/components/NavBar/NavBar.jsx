import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";

import "./navBar.css"


const categorias = [
  {idCategoria: '1', name: 'autos', nameButton: 'Autos'},
  {idCategoria: '2', name: 'suv', nameButton: 'Suvs'},
  {idCategoria: '3', name: 'pick-up', nameButton: 'Pick-Ups'},
  {idCategoria: '3', name: 'electrico', nameButton: 'Electricos'},
]



const NavBar = () => {
  return (
   
  
    <Navbar   bg="primary" fixed="top" variant="dark">
      <Container>
       <Link to='/'>
           <img className="d-inline-block align-top" src="https://www.ar.ford.com/manual/img/logo.png"></img>
       </Link>
      
      <Nav  className="ml-auto">
        
 
        {categorias.map(param => <NavLink className="filtros" key={param.id} to={`/categoria/${param.name}`}>{param.nameButton}</NavLink>) }
      </Nav>
    
       
      <CardWidget/>
      </Container>
    </Navbar>
  
  )
}


export default NavBar