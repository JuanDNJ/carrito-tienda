import { lazy } from "react";

const Layout = lazy(() => import('../pages/Layout.jsx'))
const LayoutHome = lazy(() => import('../pages/public/home/LayoutHome.jsx'))
const LayoutCustomers = lazy(() => import('../pages/public/customers/LayoutCustomers.jsx'))
const LayoutCategories = lazy(() => import('../pages/public/category/LayoutCategories.jsx'))
const Home = lazy(() => import('../pages/public/home/HomePage.jsx'))
const ProductHome = lazy(() => import('../pages/public/home/ProductHome.jsx'))
const AccountPage = lazy(() => import('../pages/private/AccountPage.jsx'))
const Category = lazy(() => import('../pages/public/category/CategoryPage.jsx'))
const ProductPage = lazy(() => import('../pages/public/category/ProductPage.jsx'))
const ViewMyCart = lazy(() => import('../pages/public/view-cart/ViewCart.jsx'))
const CheckOutMyCart = lazy(() => import('../pages/public/checkout-my-cart/CheckOutMyCart.jsx'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))
const Signin = lazy(() => import('../pages/public/customers/Signin.jsx'))
const Create = lazy(() => import('../pages/public/customers/Create.jsx'))
const ForgotPassword = lazy(() => import('../pages/public/customers/ForgotPassword.jsx'))
const ShopAll = lazy(() => import('../pages/public/shop-all/ShopAll.jsx'))
const About = lazy(() => import('../pages/public/about/About.jsx'))

export {
    Layout,
    LayoutHome,
    LayoutCustomers,
    LayoutCategories,
    AccountPage,
    Category,
    ProductPage,
    Home,
    ProductHome,
    About,
    ShopAll,
    Signin,
    Create,
    ForgotPassword,
    ViewMyCart,
    CheckOutMyCart,
    PageNotFound
}