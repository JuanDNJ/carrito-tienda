import { Outlet } from 'react-router-dom'
import Navigation from '@/components/nav/Navigation'
import { Cart } from "@/components/cart/Cart"
import { Header } from '@/components/header/Header'
import { IS_DEVELOPMENT } from "@/config";
import { Fragment } from 'react';
import { Footer } from '@/components/footer/Footer'
export default function Layout() {
    return (
        <Fragment>
            <Cart />
            <Header />
            <Navigation />
            <section className="app">
                <Outlet />
                {/* {IS_DEVELOPMENT && <Footer />} */}
            </section>
        </Fragment>
    )
}