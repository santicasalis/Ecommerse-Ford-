import { Carousel} from "react-bootstrap"




export const Carousel = () => {
  return (
      <div>
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://www.ford.com.ar/content/ford/ar/es_ar/home/jcr:content/par/image/image.imgs.full.high.jpg/1642609919307.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
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
      className="d-block w-100"
      src="https://www.ford.com.ar/content/ford/ar/es_ar/home/crossovers-suvs-4x4/nueva-ranger-raptor/galeria/jcr:content/par/gallerycategory/generalParsys,%20decorationTagName=%27div%27/image_1628124597/image.imgs.full.high.jpg/1613054235436.jpg"
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


