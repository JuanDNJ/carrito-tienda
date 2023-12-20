import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

export default function LayoutCategories() {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    )
}