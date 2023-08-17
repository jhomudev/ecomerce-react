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
      if (state.categories.includes(payload)) return
      const newState = { ...state, categories: [...state.categories, payload] }
      return newState
    }
    case TYPES.REMOVE_CATEGORY: {
      const newCategories = [...state.categories].filter((category) => category.srcName !== payload)
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
