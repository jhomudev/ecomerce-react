import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export function useCart () {
  const { cart, addToCart, removeProduct, clearCart } = useContext(CartContext)

  return {
    cart,
    addToCart,
    removeProduct,
    clearCart
  }
}
