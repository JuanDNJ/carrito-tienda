import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import FilterProvider from './context/FilterCtx.jsx'
import CartProvider from './context/CartCtx.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </FilterProvider>,
)
