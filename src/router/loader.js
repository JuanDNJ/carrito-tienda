import { lazy } from "react";

const Layout = lazy(() => import('../pages/Layout.jsx'))
const App = lazy(() => import('../pages/public/App.jsx'))
const AccountPage = lazy(() => import('../pages/private/AccountPage.jsx'))
const Category = lazy(() => import('../pages/public/category/CategoryPage.jsx'))
const Home = lazy(() => import('../pages/public/home/HomePage.jsx'))

export {
    Layout,
    App,
    AccountPage,
    Category,
    Home
}