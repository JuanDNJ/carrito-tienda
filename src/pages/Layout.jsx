import { Outlet } from 'react-router-dom'
import { Header } from '@/components/header/Header'
import { IS_DEVELOPMENT } from "@/config";
// import { Footer } from '@/components/footer/Footer'
export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            {/* {IS_DEVELOPMENT && <Footer filters={filters} />} */}
        </>
    )
}