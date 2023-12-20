import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Suspense } from 'react'
import FilterCtx from '@/context/FilterCtx.jsx'
import GlobalCtx from '@/context/GlobalCtx.jsx'
import CartProvider from '@/context/CartCtx.jsx'
import ProductCtx from '@/context/ProductsCtx.jsx'

import {
    Layout,
    LayoutCustomers,
    LayoutHome,
    ProductHome,
    ProductPage,
    LayoutCategories,
    AccountPage,
    Category,
    Home,
    About,
    ShopAll,
    Signin,
    Create,
    ViewMyCart,
    CheckOutMyCart,
    PageNotFound
} from './loader'

export default function Router() {
    return (
        <Suspense fallback={<h1 style={{ color: '#333' }}>Loadding ...</h1>}>
            <GlobalCtx>
                <FilterCtx>
                    <ProductCtx>
                        <CartProvider>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/carrito-tienda" element={<Layout />} >
                                        <Route index element={<Home />} />
                                        <Route path="home" element={<LayoutHome />}>
                                            <Route index element={<Home />} />
                                            <Route path="product/:product" element={<ProductHome />} />
                                        </Route>
                                        <Route path="about" element={<About />} />
                                        <Route path="shop-all" element={<ShopAll />} />
                                        <Route path="customers" element={<LayoutCustomers />} >
                                            <Route path="signin" element={<Signin />} />
                                            <Route path="create" element={<Create />} />
                                        </Route>
                                        <Route path="account" element={<AccountPage />} />
                                        <Route path="category" element={<LayoutCategories />} >
                                            <Route path=":category" element={<Category />} />
                                            <Route path=":category/product/:product" element={<ProductPage />} />
                                        </Route>
                                        <Route path="view-my-cart" element={<ViewMyCart />} />
                                        <Route path="checkout-my-cart" element={<CheckOutMyCart />} />
                                        <Route path="*" element={<PageNotFound />} />
                                    </Route>
                                </Routes>
                            </BrowserRouter>
                        </CartProvider>
                    </ProductCtx>
                </FilterCtx>
            </GlobalCtx>
        </Suspense>
    )
}