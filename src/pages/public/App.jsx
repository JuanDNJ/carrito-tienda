import { products as initialProducts } from '@/data/products.json'
import { Products } from '@/components/products/Products'
import { useState } from "react"
import { useFiltersCtx } from '@/context/FilterCtx'
import { useGlobalCtx } from '@/context/GlobalCtx'
import MenuFiltersCloseIcon from '@/components/icons/MenuFiltersCloseIcon'
import { Filters } from "@/components/filters/Filters"

function App() {
  const { filterdProducts } = useFiltersCtx()
  const [allProducts] = useState(initialProducts)
  const filteredProducts = filterdProducts(allProducts)
  const { isOpenFilters, toogleOpenFilters } = useGlobalCtx()

  return (
    <>
      <section className='app'>
        {isOpenFilters && <div className='modalFilters'>
          <div className='containerCloseFilters' onClick={toogleOpenFilters}> <MenuFiltersCloseIcon fill={'#9009'} /></div>
          <Filters />
        </div>}

        <Products products={filteredProducts} />
      </section>
    </>
  )

}

export default App

