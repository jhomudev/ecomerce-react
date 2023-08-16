import { useState } from 'react'
import { products as initialProducts } from './../mocks/productos.json'

export function useProducts ({ filters }) {
  const [products] = useState(initialProducts)

  const productsFilter = products.filter((product) => (
    (filters.categories.length <= 0 ||
    filters.categories.filter((cat) => cat.srcName === product.category).length > 0) &&
    product.price >= filters.minPrice)
  )

  return { productsFilter }
}
