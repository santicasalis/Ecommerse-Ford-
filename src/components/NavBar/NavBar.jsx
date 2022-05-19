import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";
import "./navBar.css"


const NavBar = () => {
  return (
   
  
    <Navbar  bg="primary" fixed="top" variant="dark">
      <Container>
       <Link to='/'>
       
      <img className="d-inline-block align-top" src="https://www.ar.ford.com/manual/img/logo.png"></img>

       </Link>
      <Nav className="ml-auto">
        <Nav.Link className="text-white nav h5"  href="#Autos">Autos</Nav.Link>
        <Nav.Link className="text-white nav h5" href="#Suv">Suv</Nav.Link>
        <Nav.Link className="text-white nav h5" href="#Pick-Up">Pick-Up</Nav.Link>
        <Nav.Link className="text-white nav h5" href="#Electricos">Electricos</Nav.Link>
        
      </Nav>
      <CardWidget/>
      </Container>
    </Navbar>
  
  )
}


export default NavBar