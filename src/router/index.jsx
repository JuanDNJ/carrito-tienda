import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import FilterCtx from '@/context/FilterCtx.jsx'
import GlobalCtx from '@/context/GlobalCtx.jsx'
import CartProvider from '@/context/CartCtx.jsx'
import ProductCtx from '@/context/ProductsCtx.jsx'
import { Layout, App, AccountPage, Category, Home } from './loader'

export default function Router() {
    return (
        <Suspense fallback={<h1 style={{ color: '#333' }}>Loadding ...</h1>}>
            <GlobalCtx>
                <FilterCtx>
                    <CartProvider>
                        <ProductCtx>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/carrito-tienda" element={<Layout />} >
                                        <Route index element={<App />} />
                                        <Route path="home" element={<Home />} />
                                        <Route path="account" element={<AccountPage />} />
                                        <Route path="category/:category" element={<Category />} />
                                        <Route path="*" element={<h1 style={{ color: '#333' }}>PAge not found</h1>} />
                                    </Route>
                                </Routes>
                            </BrowserRouter>
                        </ProductCtx>
                    </CartProvider>
                </FilterCtx>
            </GlobalCtx>
        </Suspense>
    )
}