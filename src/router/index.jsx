import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import FilterCtx from '../context/FilterCtx.jsx'
import GlobalCtx from '../context/GlobalCtx.jsx'
import CartProvider from '../context/CartCtx.jsx'
import { Layout, App, AccountPage } from './loader'

export default function Router() {
    return (
        <Suspense fallback={<h1 style={{ color: '#333' }}>Loadding ...</h1>}>
            <GlobalCtx>
                <FilterCtx>
                    <CartProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Layout />} >
                                    <Route index element={<App />} />
                                    <Route path="home" element={<App />} />
                                    <Route path="account" element={<AccountPage />} />
                                    <Route path="*" element={<h1 style={{ color: '#333' }}>PAge not found</h1>} />
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </CartProvider>
                </FilterCtx>
            </GlobalCtx>
        </Suspense>
    )
}