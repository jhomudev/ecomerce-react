import { FilterReducer, initialState } from '../reducers/FilterReducer'
import { useReducer } from 'react'

export function useFiltersReducer () {
  const [state, dispatch] = useReducer(FilterReducer, initialState)

  function addCategory ({ cat }) {
    dispatch({
      actionType: 'ADD_CATEGORY',
      payload: cat
    })
  }

  function removeCategory ({ idCat }) {
    dispatch({
      actionType: 'REMOVE_CATEGORY',
      payload: idCat
    })
  }

  function changeMinPrice ({ newMinPrice }) {
    dispatch({
      actionType: 'CHANGE_MIN_PRICE',
      payload: newMinPrice
    })
  }

  return { addCategory, removeCategory, changeMinPrice, state }
}
