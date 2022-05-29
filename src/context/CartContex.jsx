import {createContext, useContext, useState } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)



 export const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])

    function addToCart(item ) {
        setCartList( [
            ...cartList,
            item
        ] )
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={ {
            
            cartList,
            addToCart,
            vaciarCarrito,
            
        } } >
            {children}
        </CartContext.Provider>
    )
}

