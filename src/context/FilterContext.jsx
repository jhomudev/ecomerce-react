import React, { createContext } from 'react'
import { useFiltersReducer } from '../hooks/useFiltersReducer'

export const FilterContext = createContext()

function FilterProvider ({ children }) {
  const { state, addCategory, removeCategory, changeMinPrice } = useFiltersReducer()
  return (
    <FilterContext.Provider value={{
      filters: state,
      addCategory,
      removeCategory,
      changeMinPrice
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider
