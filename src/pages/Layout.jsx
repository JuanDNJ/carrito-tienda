import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header/Header'
import { IS_DEVELOPMENT } from "@/config";
import { Fragment } from 'react';
// import { Footer } from '@/components/footer/Footer'
export default function Layout() {
    return (
        <Fragment>
            <Header />
            <section className="app">
                <Outlet />
                {/* {IS_DEVELOPMENT && <Footer filters={filters} />} */}
            </section>
        </Fragment>
    )
}