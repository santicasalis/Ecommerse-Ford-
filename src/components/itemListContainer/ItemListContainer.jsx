
import {useEffect , useState  } from "react"
import ItemList from "../ItemList/ItemList"

const vehiculos = [
  {id:"1", categoria:"pick-up", producto:"Ranger", stock:10, precio:"10000", imagen:"https://www.ar.ford.com/manual/img/ranger.jpg", descripcion:"Nueva Ranger LIMITED 3.2L 4X4 Diesel AT"},
  {id:"2", categoria:"pick-up", producto:"Maverick", stock:3, precio:"8000", imagen:"https://www.ar.ford.com/manual/img/maverick.jpg", descripcion:"Nueva  Maverick  Lariat 2.0 L 4X4 AT"},
  {id:"3", categoria:"pick-up", producto:"F-150 Raptor", stock:2, precio:"90.000", imagen:"https://www.ar.ford.com/manual/img/f-150-raptor.jpg", descripcion:"Nueva F-150 Raptor 3.5L 4x4 AT"},
  {id:"4", categoria:"suv", producto:"Bronco",precio:"15.000", stock:8, imagen:"https://www.ar.ford.com/manual/img/broncosport.jpg", descripcion:"Nueva Bronco WildTrack 2.0L 4X4 AT"},
  {id:"5", categoria:"suv", producto:"Territory",precio:"12.000", stock:1, imagen:"https://www.ar.ford.com/manual/img/territory.jpg", descripcion:"Nueva Territory 1.5L Turbo AT"},
  {id:"6", categoria:"electrico", producto:"Kuga",precio:"18.000", stock:3, imagen:"https://www.ar.ford.com/manual/img/nueva-kuga.jpg", descripcion:"Nueva Kuga Híbrida 2.5L Auto-recargable "},
  {id:"7", categoria:"electrico", producto:"F-150",precio:"85.000", stock:2, imagen:"https://www.ar.ford.com/manual/img/f-150.jpg", descripcion:"Nueva F-150  3.5L V6 Híbrido 4x4 AT "},
  {id:"8", categoria:"electrico", producto:"Mondeo",precio:"70.000", stock:1, imagen:"https://www.ar.ford.com/manual/img/mondeohibrido.jpg ", descripcion:"Nuevo Mondeo Hìbrido "},
  {id:"9", categoria:"pick-up", producto:"Ranger Raptor",precio:"40.000", stock:1, imagen:"https://www.ar.ford.com/manual/img/rangerraptor.jpg", descripcion:"Nueva Ranger Raptor 2.0L Bi Turbo "},
  {id:"10", categoria:"suv", producto:"Ecosport",precio:"6.000", stock:1, imagen:"https://www.ar.ford.com/manual/img/ecosport.jpg", descripcion:"Ecosport 1.5L Dragon 4X2 "},
  {id:"11", categoria:"autos", producto:"Mustang",precio:"80.000", stock:1, imagen:"https://www.ar.ford.com/manual/img/mustang.jpg", descripcion:"Nuevo Mustang Match V8 5.0L  AT "},
  {id:"12", categoria:"autos", producto:"Mondeo",precio:"45.000", stock:1, imagen:"https://www.ar.ford.com/manual/img/mondeo.jpg", descripcion:"Mondeo 2.0L Ecoboost  AT "}

]




const getFetch = new Promise((resolve)=>{
setTimeout(() => {
  resolve (vehiculos)
}, 2000)

})


export const ItemListContainer = () => {
  const [vehiculos , setVehiculos]= useState([])

  useEffect(()=>{
getFetch
.then(respuesta=>setVehiculos(respuesta))
.catch((error)=>console.log(error))
.finally(()=>console.log("ss"))

  }, [])

  return (


  <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}> 
        <ItemList vehiculos={vehiculos} /> 
  </div>

  )
}








export default ItemListContainer






