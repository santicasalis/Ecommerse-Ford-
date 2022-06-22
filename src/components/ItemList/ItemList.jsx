import { Item } from "../Item/Item"

const ItemList = ({ cars }) => {
 
  return (
   cars.map((car) => <Item key={car.id} car={car} />)
  )
}

export default ItemList