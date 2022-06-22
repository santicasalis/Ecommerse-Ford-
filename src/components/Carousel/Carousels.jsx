import { Carousel } from "react-bootstrap"

import "./carousels.css"

export const Carousels = () => {
  return (
    <div className="carro col-md-8">
      <Carousel >
        <Carousel.Item interval={2000}>
          <img
            className="d-block "
            width="90%"
            src="https://forcam.com.ar/pickups/img/f-150-raptor/gal8.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>F-150 Raptor</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={2000}>
          <img 
            className="d-block"
            width="100%"
            src="https://www.ford.com.ar/content/dam/Ford/website-assets/latam/ar/nameplate/bronco-sport/prelaunch/gallery-trigger/overlay/far-bronco-sport-trigger-over-01.jpg"
            alt="Second slide"
          
          />
         
          <Carousel.Caption>
            <h3>Bronco Sport</h3>
          
          </Carousel.Caption>
        </Carousel.Item>
       
        <Carousel.Item interval={2000}>
          <img
            className="d-block "
            width="90%"
            src="https://forcam.com.ar/autos/img/mustang/gal3.jpg"
            alt="Third slide"
            
          />
          <Carousel.Caption>
            <h3>Mustang GT</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}


