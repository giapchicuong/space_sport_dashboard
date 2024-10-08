import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import AuthPage from "../pages/authPage";
import RegisterPage from "../pages/authPage/registerPage/RegisterPage";
import ErrorPage from "../components/ErrorPage";
import AnalystPage from "../pages/analystPage";
import OrdersPage from "../pages/ordersPage";
import InvoicesPage from "../pages/invoicesPage";
import InventoryPage from "../pages/inventoryPage";
import ProductsPage from "../pages/productsPage";
import CategoriesPage from "../pages/categoriesPage";
import SuppliersPage from "../pages/suppliersPage";
import UsersPage from "../pages/usersPage";
import GroupsPage from "../pages/groupsPage";
import RolesPage from "../pages/rolesPage";
import MenuPage from "../pages/menuPage/MenuPage";
import InvoiceDetailsPage from "../pages/invoiceDetailsPage/InvoiceDetailsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MenuPage />
    },
    {
        path: '/admin',
        element: <App />,
        children: [
            {
                path: 'analyst',
                element: <AnalystPage />
            },
            {
                path: 'orders',
                element: <OrdersPage />
            },
            {
                path: 'invoices',
                element: <InvoicesPage />
            },
            {
                path: 'invoices/:id',
                element: <InvoiceDetailsPage />
            },
            {
                path: 'inventory',
                element: <InventoryPage />
            },
            {
                path: 'products',
                element: <ProductsPage />
            },
            {
                path: 'categories',
                element: <CategoriesPage />
            },
            {
                path: 'suppliers',
                element: <SuppliersPage />
            },
            {
                path: 'users',
                element: <UsersPage />
            },
            {
                path: 'groups',
                element: <GroupsPage />
            },
            {
                path: 'roles',
                element: <RolesPage />
            },
        ]
    },

    {
        path: '/auth',
        element: <AuthPage />,
        children: [
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    },
])

export default router
