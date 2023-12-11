import { products as initialProducts } from '@/data/products.json'
import { Products } from '@/components/products/Products'
import { useState } from "react"
import { useFiltersCtx } from '@/context/FilterCtx'


function App() {
  const { filterdProducts } = useFiltersCtx()
  const [allProducts] = useState(initialProducts)
  const filteredProducts = filterdProducts(allProducts)

  return (
    <>
      <section className='app' >
        <Products products={filteredProducts} />
      </section>
    </>
  )

}

export default App

