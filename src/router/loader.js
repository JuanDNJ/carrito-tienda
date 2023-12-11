import { lazy } from "react";

const Layout = lazy(() => import('../pages/Layout.jsx'))
const App = lazy(() => import('../pages/public/App.jsx'))
const AccountPage = lazy(() => import('../pages/private/AccountPage.jsx'))

export {
    Layout,
    App,
    AccountPage
}