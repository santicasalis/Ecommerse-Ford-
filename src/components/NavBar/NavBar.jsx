import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import CardWidget from "../CardWidget/CardWidget";


const NavBar = () => {
  return (
   
  
    <Navbar bg="primary" fixed="top" sticky="top" variant="dark">
      <Container>
      <Navbar.Brand href="#">  
      <img
          alt=""
          src="https://www.ar.ford.com/manual/img/logo.png"
          width=""
          height=""
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link className="text-white nav"  href="#Autos">Autos</Nav.Link>
        <Nav.Link className="text-white nav" href="#Suv">Suv</Nav.Link>
        <Nav.Link className="text-white nav" href="#Pick-Up">Pick-Up</Nav.Link>
        <Nav.Link className="text-white nav" href="#Electricos">Electricos</Nav.Link>
        
      </Nav>
      <CardWidget/>
      </Container>
    </Navbar>
  
  )
}


export default NavBar