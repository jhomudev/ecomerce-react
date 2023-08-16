import React, { createContext } from 'react'
import useCartReducer from '../hooks/useCartReducer'

export const CartContext = createContext()

function CartProvider ({ children }) {
  const { state, addToCart, removeProduct, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeProduct,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
