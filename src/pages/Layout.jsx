import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header/Header'
// import { IS_DEVELOPMENT } from "@/config";
import ProductCtx from '@/context/ProductsCtx.jsx'
import CartProvider from '@/context/CartCtx.jsx'
// import { Footer } from '@/components/footer/Footer'
export default function Layout() {
    return (
        <ProductCtx>
            <CartProvider>
                <Header />
                <section className="app">
                    <Outlet />
                    {/* {IS_DEVELOPMENT && <Footer filters={filters} />} */}
                </section>
            </CartProvider>
        </ProductCtx>
    )
}