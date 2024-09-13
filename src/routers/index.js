import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import HomePage from "../pages/homepage";
import VideoPage from "../pages/videoPage";
import AuthPage from "../pages/authPage";
import UploadVideoPage from "../pages/uploadVideoPage";
import AccountPage from "../pages/accountPage";
import RegisterPage from "../pages/authPage/registerPage/RegisterPage";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/flatform',
        element: <HomePage />,
        children: [
            {
                path: 'view',
                element: <VideoPage />
            }
        ]
    },
    {
        path: '/upload',
        element: <UploadVideoPage />
    },
    {
        path: '/account',
        element: <AccountPage />
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
