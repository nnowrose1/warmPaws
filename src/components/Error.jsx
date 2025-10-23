import React from 'react';
import { useNavigate } from 'react-router';
import errorIcon from '../assets/error-404.png'
import Footer from './Footer';
import Navbar from './Navbar';

const Error = () => {
    const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <div className="w-full text-center p-20 bg-orange-100">
        <img className="mx-auto" src={errorIcon} alt="" />
        <h2 className="font-semibold text-5xl text-primary mt-4">
          Oops, page not found!
        </h2>
        <p className="text-accent text-xl mt-2 mb-4">
          The page you are looking for is not available.
        </p>
        {/* button a click korle ek step back a jabe */}
        <button
          onClick={() => navigate(-1)}
          className=" btn py-4 px-10 bg-primary rounded-md  text-white font-semibold"
        >
          Go Back!
        </button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Error;