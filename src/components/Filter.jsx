import { X } from '@phosphor-icons/react'
import { useFilters } from '../hooks/useFilters'
import { products } from './../mocks/productos.json'

const CATEGORIES_PRODUCTS = [
  { srcName: 'home-decoration', name: 'Decoraciones' },
  { srcName: 'smartphones', name: 'Celulares' },
  { srcName: 'fragrances', name: 'Fragancias' },
  { srcName: 'laptops', name: 'Laptops' }
]

export default function Filter () {
  const { filters, changeMinPrice, addCategory } = useFilters()

  const price = { min: 0, max: 3000 }

  function getQuantityForCat ({ srcNameCat }) {
    const productsInSrcName = products.filter((product) => product.category === srcNameCat)
    return productsInSrcName.length
  }

  function handleChangeMinPrice (e) {
    const newMinPrice = e.target.value
    changeMinPrice({ newMinPrice })
  }

  return (
    <aside className='bg-white w-[min(100%,300px)] p-5'>
      <h4 className='text-c_dark-strong font-medium mb-3'>Filtro</h4>
      <div className='filters grid gap-5'>
        <div className='filter grid gap-2'>
          <label className='text-xs uppercase text-c_dark-strong'>PRECIO MÍNIMO</label>
          <div className='range flex gap-2 items-center justify-between'>
            <span className='text-sm text-c_dark-smoth whitespace-nowrap'>$ {price.min}</span>
            <input onChange={handleChangeMinPrice} className='w-full appearance-none bg-c_dark-high h-1' type='range' value={filters.minPrice} min={price.min} max={price.max} />
            <span className='text-sm text-c_dark-smoth whitespace-nowrap'>$ {price.max}</span>
          </div>
          <span className='mx-auto p-1 text-white text-center bg-c_dark-strong rounded-sm w-[min(100%,10em)]'>$ {filters.minPrice}.00</span>
        </div>
        <div className='filter grid gap-2'>
          <label className='text-xs uppercase text-c_dark-strong'>CATEGORÍAS</label>
          <ul className='grid gap-2'>
            {
              CATEGORIES_PRODUCTS.map((cat) => (
                <li key={cat.srcName} onClick={() => { addCategory({ cat }) }} className='py-2 px-3 flex items-center justify-between text-sm outline-c_dark-high hover:outline hover:outline-[1px] rounded-md cursor-pointer'>
                  <p>{cat.name}</p>
                  <span className='font-light text-sm'>{getQuantityForCat({ srcNameCat: cat.srcName })}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </aside>
  )
}

export function FiltersThere () {
  const { filters, removeCategory } = useFilters()
  const hasFilters = filters.categories.length > 0
  return hasFilters && (
    <div className='top p-0'>
      <ul className='flex gap-3 items-center text-sm'>
        {
          filters.categories.map((cat) => (
            <li key={cat.srcName} className='bg-white py-2 px-3 flex gap-2 items-center shadow-md rounded-full'>{cat.name}
              <button onClick={() => { removeCategory({ srcNameCat: cat.srcName }) }} className='hover:text-red-500'><X size={15} /></button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
