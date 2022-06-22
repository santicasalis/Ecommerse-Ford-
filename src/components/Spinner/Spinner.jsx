import { Spinner } from "react-bootstrap";


export const Load = () => {
    return(
<Spinner animation="border" role="status" variant="primary"size="xl">
  <span className="visually-hidden">Loading...</span>
</Spinner>)
}