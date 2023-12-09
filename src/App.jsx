import { products as initialProducts } from './data/products.json'
import { Products } from './components/Products'
import { useState } from "react"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFiltersCtx } from './context/FilterCtx'

import { IS_DEVELOPMENT } from "./config";
function App() {
  const { filters, setFilters, filterdProducts } = useFiltersCtx()
  const [allProducts] = useState(initialProducts)

  const filteredProducts = filterdProducts(allProducts)

  return (
    <section className='app' >
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </section>
  )
}

export default App
