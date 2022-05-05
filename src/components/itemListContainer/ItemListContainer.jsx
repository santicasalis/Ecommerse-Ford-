
import  Boton  from "../itemListContainer";
const ItemListContainer = () => {

    function comprar(){
       console.log("Gracias por la compra");
    }
  return (
    <>
        <Boton comprar = {comprar}/>
    </>
  )
}

export default ItemListContainer



//OTRO COMPONENTE



