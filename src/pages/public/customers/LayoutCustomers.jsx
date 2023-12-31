import { Outlet } from 'react-router-dom'

export default function LayoutCustomers() {
    return (
        <section>
            <h2 className='titleXL'>Customers</h2>
            <Outlet />
        </section>
    )
}