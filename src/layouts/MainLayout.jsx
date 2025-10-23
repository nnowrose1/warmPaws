import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import Loader from '../components/Loader';

const MainLayout = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
        <Navbar></Navbar>
            </header>
          <main>
            {state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}
            
            <Footer></Footer>
            </main>

            
             <ToastContainer /> 
        </div>
    );
};

export default MainLayout;