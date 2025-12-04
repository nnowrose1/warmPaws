import React from 'react';
import { Outlet } from 'react-router';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import FooterUp from '../components/FooterUp';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>
                <Login></Login>
                <Register></Register>
            </Outlet>
            <FooterUp></FooterUp>
            <ToastContainer /> 
        </div>
    );
};

export default AuthLayout;