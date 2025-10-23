import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import Error from "../components/Error";
import ServiceDetails from "../pages/ServiceDetails";
import Loader from "../components/Loader";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                loader: () => fetch('/petCare.json'),
                element: <Home></Home>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/services',
                loader: () => fetch('/petCare.json'),
                element: <Services></Services>,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
             path: '/services/:id',
             loader: () => fetch('/petCare.json'),
             element: <PrivateRoutes>
                <ServiceDetails></ServiceDetails>
             </PrivateRoutes>,
             hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/profile',
                element: <MyProfile></MyProfile>
            },

        ],

    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
           path: '/auth/register',
           element: <Register></Register>
            }
        ]
    },
       {
        path: '/*',
        element: <Error></Error>
    }
])