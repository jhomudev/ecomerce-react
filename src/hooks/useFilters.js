import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

export function useFilters () {
  const { filters, setFilters } = useContext(FilterContext)

  function handleChangeMinPrice (e) {
    setFilters((prevState) => (
      { ...prevState, minPrice: e.target.value }
    ))
  }

  function addCategory ({ cat }) {
    if (filters.categories.includes(cat)) return
    setFilters((prevState) => (
      { ...prevState, categories: [...prevState.categories, cat] }
    ))
  }

  function removeCategory ({ srcNameCat }) {
    setFilters((prevState) => {
      const newCategories = [...prevState.categories].filter((category) => category.srcName !== srcNameCat)
      return {
        minPrice: prevState.minPrice,
        categories: newCategories
      }
    })
  }

  return { filters, handleChangeMinPrice, addCategory, removeCategory }
}
