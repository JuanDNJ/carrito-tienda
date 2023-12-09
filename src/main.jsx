import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import FilterCtx from './context/FilterCtx.jsx'
import CartProvider from './context/CartCtx.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterCtx>
    <CartProvider>
      <App />
    </CartProvider>
  </FilterCtx>,
)
