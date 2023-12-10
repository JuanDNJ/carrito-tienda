import { products as initialProducts } from './data/products.json'
import { Products } from './components/products/Products'
import { useState } from "react"
import { Header } from './components/header/Header'
// import { Footer } from './components/footer/Footer'
import { useFiltersCtx } from './context/FilterCtx'

import { IS_DEVELOPMENT } from "./config";
function App() {
  const { filters, setFilters, filterdProducts } = useFiltersCtx()
  const [allProducts] = useState(initialProducts)

  const filteredProducts = filterdProducts(allProducts)

  return (
    <>
      <Header changeFilters={setFilters} />
      <section className='app' >
        <Products products={filteredProducts} />
        {/* {IS_DEVELOPMENT && <Footer filters={filters} />} */}
      </section>
    </>
  )
}

export default App
