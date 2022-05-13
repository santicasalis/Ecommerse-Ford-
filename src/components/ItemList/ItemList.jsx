import { Item } from "../Item/Item"




const ItemList = ({ vehiculos }) => {
  return (
        vehiculos.map((vehiculo) =>  <Item key={vehiculo.id} vehiculo={vehiculo} />  )
  )
}

export default ItemList