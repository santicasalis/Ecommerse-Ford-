import {createContext, useContext, useState } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)



 export const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])

    function addToCart(item ) {
        const index=cartList.findIndex(vehiculo=>vehiculo.id ===item.id)
        if(index!==-1){
            const cantidadVieja=cartList[index].cantidad 
            cartList[index].cantidad += cantidadVieja
            setCartList([...cartList])
        }else{
        setCartList( [
            ...cartList,
            item
        ] )
       }
    }

    const vaciarCarrito = () => {
        setCartList([])
    }
  const cantidadTotal=()=>{
      return cartList.reduce((contador, vehiculo)=>contador+=vehiculo.cantidad,0)
  }
    const removerItem=(id)=>{
        setCartList(cartList.filter((vehiculo=>vehiculo.id !== id)))
    }

    const precioTotal=()=>{
        return cartList.reduce((contador, vehiculo)=>contador + (vehiculo.cantidad * vehiculo.precio),0)
    }


    return (
        <CartContext.Provider value={ {
            
            cartList,
            addToCart,
            vaciarCarrito,
            cantidadTotal,
            removerItem,
            precioTotal,


            
        } } >
            {children}
        </CartContext.Provider>
    )
}

