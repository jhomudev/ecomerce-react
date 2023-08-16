import React, { createContext, useState } from 'react'

export const FilterContext = createContext()

function FilterProvider ({ children }) {
  const [filters, setFilters] = useState({
    minPrice: 0,
    categories: []
  })

  return (
    <FilterContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider
