import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";
import Loader from "../components/Loader";
import Aos from "aos";
import "aos/dist/aos.css";
import FooterUp from "../components/FooterUp";

const MainLayout = () => {
  const { state } = useNavigation();
  // Initiating the AOS package
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto">
      <header className="sticky top-0 z-50 bg-white shadow">
        <Navbar></Navbar>
      </header>
      <main>
        {state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}

        <FooterUp></FooterUp>
      </main>

      <ToastContainer />
    </div>
  );
};

export default MainLayout;
