import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

export function useFilters () {
  const { filters, addCategory, removeCategory, changeMinPrice } = useContext(FilterContext)

  return { filters, changeMinPrice, addCategory, removeCategory }
}
