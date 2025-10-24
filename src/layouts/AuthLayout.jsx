import React from 'react';
import { Outlet } from 'react-router';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>
                <Login></Login>
                <Register></Register>
            </Outlet>
            <Footer></Footer>
            <ToastContainer /> 
        </div>
    );
};

export default AuthLayout;