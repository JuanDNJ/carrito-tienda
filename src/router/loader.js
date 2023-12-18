import { lazy } from "react";

const Layout = lazy(() => import('../pages/Layout.jsx'))
const AccountPage = lazy(() => import('../pages/private/AccountPage.jsx'))
const Category = lazy(() => import('../pages/public/category/CategoryPage.jsx'))
const Home = lazy(() => import('../pages/public/home/HomePage.jsx'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))
export {
    Layout,
    AccountPage,
    Category,
    Home,
    PageNotFound
}