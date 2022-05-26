import {createContext, useContext, useState } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


 export const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])

    function addToCart(item) {
        setCartList( [
            ...cartList,
            item
        ] )
    }



    return (
        <CartContext.Provider value={ {
            
            cartList,
            addToCart,
            
        } } >
            {children}
        </CartContext.Provider>
    )
}

