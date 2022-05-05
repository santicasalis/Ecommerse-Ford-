import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import CardWidget from "../CardWidget/CardWidget";


const NavBar = () => {
  return (
   
  
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#">  
      <img
          alt=""
          src="https://uc4c92b33d10d2c02c1f079b20f4.previews.dropboxusercontent.com/p/thumb/ABiPQ6dIwGJxtWvftczDZ-ZrkvR8TbaQN8WjJJuwYqmpGO4XjWkA0du0Z-ghzVQjgUff8WfZAkYFg3RAtnl8XhZT8dZF7CbmxQPf2jKqo0X8TM3Qn1LvOC1UXSaXGPCtaocmaO1AgiEbSCmnnmuQzmBFRbQZszR7HK9fvFw3OWh9lDBVnh0pvc7C0-q4mw3yZDOQ9WG9EbJJjo_HWcvy6y0XZ_zOF7KVTUjxntNEj5VgV7W-iXSSs9jWODVDGjaLRdzTR3bXc7cRHAmy2iCp0V3tOfeWFt61m7ejqASkA_-U3luIqfJPXEaWMKWWcWDVFmr2cu-oP7p7-JMoH2YxTTldk1S1t00cgRAv22sBnHu_ufSe5zVRtnuKp0ERHftMetk/p.png"
          width="150"
          height="95"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link className="text-white nav" href="#Autos">Autos</Nav.Link>
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