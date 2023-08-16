const ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  CLEAR_CART: 'CLEAR_CART'
}
export const initialState = JSON.parse(localStorage.getItem('cart')) || []

function updateCart (newCart) {
  localStorage.setItem('cart', JSON.stringify(newCart))
  return newCart
}

const CartReducer = (state, action) => {
  const { actionType, payload } = action
  switch (actionType) {
    case ACTION_TYPES.ADD_TO_CART: {
      const productInCartIndex = state.findIndex(item => item.id === payload.id)
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1

        return updateCart(newState)
      }

      const newState = [...state, {
        ...payload,
        quantity: 1
      }]

      return updateCart(newState)
    }

    case ACTION_TYPES.REMOVE_PRODUCT: {
      const newState = state.filter((productCart) => (
        productCart.id !== payload.id
      ))

      return updateCart(newState)
    }

    case ACTION_TYPES.CLEAR_CART: {
      return updateCart([])
    }
  }
}

export default CartReducer
