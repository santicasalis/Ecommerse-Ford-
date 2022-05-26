
import { Link } from "react-router-dom"
import "./inputCount.css"


export const InputCount= ({cuantity})=> {
const prueba =()=>{
    console.log(cuantity);
}
    
    return (
        <>
        <Link to='/card' >
            <button onClick={prueba}
                className="btn btn-primary" 
                
            >Finalizar compra</button>
        </Link>
        <Link to='/' >
            <button 
                className="btn btn-primary" 
               
            >Seguir comprando</button>
        </Link>
        </>
    )
}