import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import FilterCtx from '../context/FilterCtx.jsx'
import CartProvider from '../context/CartCtx.jsx'
import { App } from './loader'

export default function Router() {
    return (
        <Suspense fallback={<h1>Loadding ...</h1>}>
            <FilterCtx>
                <CartProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<App />} />
                        </Routes>
                    </BrowserRouter>
                </CartProvider>
            </FilterCtx>
        </Suspense>
    )
}