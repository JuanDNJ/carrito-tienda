import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Suspense } from 'react'
import FilterCtx from '@/context/FilterCtx.jsx'
import GlobalCtx from '@/context/GlobalCtx.jsx'
import CartProvider from '@/context/CartCtx.jsx'
import ProductCtx from '@/context/ProductsCtx.jsx'

import { Layout, AccountPage, Category, Home, PageNotFound } from './loader'

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
                                        <Route index element={<Home />} />
                                        <Route path="home" element={<Home />} />
                                        <Route path="account" element={<AccountPage />} />
                                        <Route path="category/:category" element={<Category />} />
                                        <Route path="*" element={<PageNotFound />} />
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