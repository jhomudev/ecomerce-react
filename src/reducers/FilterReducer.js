const TYPES = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  CHANGE_MIN_PRICE: 'CHANGE_MIN_PRICE'
}

export const initialState = {
  minPrice: 0,
  categories: []
}

export const FilterReducer = (state, action) => {
  const { actionType, payload } = action

  switch (actionType) {
    case TYPES.ADD_CATEGORY: {
      const categoryToAdd = payload
      const isAlreadyCat = state.categories.some(categorie => categorie.id === categoryToAdd.id)
      if (isAlreadyCat) return state
      const newState = { ...state, categories: [...state.categories, categoryToAdd] }
      return newState
    }
    case TYPES.REMOVE_CATEGORY: {
      const idCatToRemove = payload
      const newCategories = [...state.categories].filter((category) => category.id !== idCatToRemove)
      const newState = {
        ...state,
        categories: newCategories
      }
      return newState
    }
    case TYPES.CHANGE_MIN_PRICE: {
      const newState = { ...state, minPrice: payload }
      return newState
    }
  }
}
