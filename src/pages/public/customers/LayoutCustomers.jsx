import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

export default function LayoutCustomers() {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    )
}