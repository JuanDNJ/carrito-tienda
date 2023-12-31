import { lazy } from "react";

const Layout = lazy(() => import('../pages/Layout.jsx'))

const LayoutCustomers = lazy(() => import('../pages/public/customers/LayoutCustomers.jsx'))
const LayoutCategories = lazy(() => import('../pages/public/category/LayoutCategories.jsx'))
const Home = lazy(() => import('../pages/public/home/HomePage.jsx'))

const AccountPage = lazy(() => import('../pages/private/AccountPage.jsx'))
const Category = lazy(() => import('../pages/public/category/CategoryPage.jsx'))
const ViewProduct = lazy(() => import('../pages/public/view-product/ViewProduct.jsx'))
const ViewMyCart = lazy(() => import('../pages/public/view-cart/ViewCart.jsx'))
const CheckOutMyCart = lazy(() => import('../pages/public/customers/CheckOutMyCart.jsx'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))
const Signin = lazy(() => import('../pages/public/customers/Signin.jsx'))
const Create = lazy(() => import('../pages/public/customers/Create.jsx'))
const ForgotPassword = lazy(() => import('../pages/public/customers/ForgotPassword.jsx'))
const ShopAll = lazy(() => import('../pages/public/shop-all/ShopAll.jsx'))
const About = lazy(() => import('../pages/public/about/About.jsx'))
const ContactUs = lazy(() => import('../pages/public/contact/ContactUs.jsx'))
const InfoShop = lazy(() => import('../pages/public/info-shop/InfoShop.jsx'))
const PrivacyPolicy = lazy(() => import('../pages/public/privacy-policy/PrivacyPolicy.jsx'))
const TermsAndConditions = lazy(() => import('../pages/public/terms/TermsAndConditions.jsx'))
export {
    Layout,
    LayoutCustomers,
    LayoutCategories,
    AccountPage,
    Category,
    ViewProduct,
    Home,
    About,
    ContactUs,
    ShopAll,
    Signin,
    Create,
    ForgotPassword,
    ViewMyCart,
    CheckOutMyCart,
    InfoShop,
    PrivacyPolicy,
    TermsAndConditions,
    PageNotFound
}