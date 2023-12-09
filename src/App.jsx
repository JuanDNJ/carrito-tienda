import { useState } from 'react'
import { products as initialProducts } from './data/products.json'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilters } from './context/FilterCtx'


function App() {
  const { filters, setFilters, filterdProducts } = useFilters()
  const [products] = useState(initialProducts)

  const filteredProducts = filterdProducts(products)

  return (
    <section className='app' >
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </section>
  )
}

export default App
