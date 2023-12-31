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
    ContactUs,
    ShopAll,
    Signin,
    Create,
    ForgotPassword,
    ViewMyCart,
    CheckOutMyCart,
    InfoShop,
    PrivacyPolicy,
    TermsAndConditions,
    PageNotFound
} from './loader'

export default function Router() {
    return (
        <Suspense fallback={<h1 style={{ color: '#333' }}>Loadding ...</h1>}>
            <GlobalCtx>
                <ProductCtx>
                    <FilterCtx>
                        <CartProvider>
                            <BrowserRouter>
                                <Routes>
                                    <Route path="/carrito-tienda" element={<Layout />} >
                                        <Route index element={<Home />} />
                                        <Route path="home" element={<Home />} />
                                        <Route path="about" element={<About />} />
                                        <Route path="account" element={<AccountPage />} />
                                        <Route path="view-my-cart" element={<ViewMyCart />} />
                                        <Route path="contact" element={<ContactUs />} />
                                        <Route path="info-shop" element={<InfoShop />} />
                                        <Route path="privacy-policy" element={<PrivacyPolicy />} />
                                        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
                                        <Route path="shop-all" element={<ShopAll />} />
                                        <Route path="product/:product" element={<ProductHome />} />
                                        {/* /////////////////////////////////////// */}
                                        <Route path="customers" element={<LayoutCustomers />} >
                                            <Route path="signin" element={<Signin />} />
                                            <Route path="create" element={<Create />} />
                                            <Route path="forgot-password" element={<ForgotPassword />} />
                                            <Route path="checkout-my-cart" element={<CheckOutMyCart />} />
                                        </Route>
                                        <Route path="category" element={<LayoutCategories />} >
                                            <Route path=":category" element={<Category />} />
                                        </Route>
                                        <Route path="*" element={<PageNotFound />} />
                                    </Route>
                                </Routes>
                            </BrowserRouter>
                        </CartProvider>
                    </FilterCtx>
                </ProductCtx>
            </GlobalCtx>
        </Suspense>
    )
}