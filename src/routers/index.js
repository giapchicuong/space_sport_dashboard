import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import AuthPage from "../pages/authPage";
import RegisterPage from "../pages/authPage/registerPage/RegisterPage";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
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
