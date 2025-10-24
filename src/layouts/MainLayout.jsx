import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import Loader from '../components/Loader';
import Aos from 'aos';
import "aos/dist/aos.css";



const MainLayout = () => {
    const {state} = useNavigation();
    // Initiating the AOS package
      useEffect(() => {
    Aos.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true, 
    });
    
  }, []);


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