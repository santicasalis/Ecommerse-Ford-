import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const NavBar = () => {
  return (
   
  
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#">  
      <img
          alt=""
          src="https://media.istockphoto.com/vectors/rental-car-icon-vector-id1290071290?k=20&m=1290071290&s=612x612&w=0&h=wWAC-XinvhxfeoGySb0zefOnrCda3838MkBs_sLaWSw="
          width="90"
          height="90"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link className="text-white nav" href="#Autos">Autos</Nav.Link>
        <Nav.Link className="text-white nav" href="#Suv">Suv</Nav.Link>
        <Nav.Link className="text-white nav" href="#Pick-Up">Pick-Up</Nav.Link>
        <Nav.Link className="text-white nav" href="#Electricos">Electricos</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  
  )
}


export default NavBar