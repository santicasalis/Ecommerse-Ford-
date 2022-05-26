import { Carousel} from "react-bootstrap"
import "./carousels.css"




export const Carousels = () => {
  return (
      <div  className="carro col-md-8">
    <Carousel >
  <Carousel.Item interval={1000}>
    <img
      className="d-block "
      width = "90%"
      src="https://forcam.com.ar/pickups/img/f-150-raptor/gal8.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block"
      width = "90%"
      src="https://www.ford.com.ar/content/dam/Ford/website-assets/latam/ar/nameplate/bronco-sport/prelaunch/gallery-trigger/overlay/far-bronco-sport-trigger-over-01.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      width = "90%"
      
      src="https://forcam.com.ar/autos/img/mustang/gal3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  )
}


