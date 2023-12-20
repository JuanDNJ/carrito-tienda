import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

export default function LayoutHome() {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    )
}