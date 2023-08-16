import { useReducer } from 'react'
import CartReducer, { initialState } from '../reducers/CartReducer'

function useCartReducer () {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  function addToCart (product) {
    dispatch({
      actionType: 'ADD_TO_CART',
      payload: product
    })
  }

  function removeProduct (product) {
    dispatch({
      actionType: 'REMOVE_PRODUCT',
      payload: product
    })
  }

  function clearCart () {
    dispatch({
      actionType: 'CLEAR_CART'
    })
  }

  return { state, addToCart, removeProduct, clearCart }
}

export default useCartReducer
