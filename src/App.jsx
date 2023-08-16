import Header from './components/Header'
import { Products } from './components/Products'
import Filter, { FiltersThere } from './components/Filter'
import { useProducts } from './hooks/useProducts'
import { useFilters } from './hooks/useFilters'

function App () {
  const { filters } = useFilters()
  const { productsFilter } = useProducts({ filters })
  return (
    <div className='container-all font-kumbh'>
      <Header />
      <br />
      <section className='container mx-auto px-2'>
        <h1 className='text-xl font-medium text-c_dark-strong'>Compra productos destacados</h1><br />
        <div className='flex gap-10'>
          <Filter />
          <div className='w-full flex-1 flex flex-col gap-3'>
            <FiltersThere />
            <main className='bg-gray-100 rounded-md p-5 flex-1 grid gap-5 grid-cols-[repeat(auto-fit,minmax(230px,1fr))]'>
              <Products products={productsFilter} />
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
