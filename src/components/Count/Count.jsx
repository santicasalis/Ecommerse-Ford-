
export const Count= ({onAdd,cuantity })=> {

    return (

   <button className="btn btn-primary"  onClick = {()=>onAdd(cuantity)  }>
   Añadir al carrito
 </button>

    )
}