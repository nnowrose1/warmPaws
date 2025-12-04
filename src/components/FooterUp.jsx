import React from 'react';

import { FaPaw, FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from 'react-router';
import logo from '../assets/logo1.png'

const FooterUp = () => {
     return (
    <footer
      className=" text-accent"
      style={{
        background: "linear-gradient(135deg, #E0F2FE 0%, #FEF3C7 100%)", // soft icy blue → warm cream
      }}
    >
      <div className="container mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex flex-col md:flex-row items-center mb-4">
            {/* <FaPaw className="text-amber-600 text-3xl" /> */}
            <img className='w-20 h-20 rounded-full ' src={logo} alt="" />
            <h2 className="text-2xl font-bold -mt-4 md:mt-0 md:-ml-3">WarmPaws</h2>
          </div>
          <p className="text-accent leading-relaxed">
            Keeping your pets warm, safe, and healthy during the winter season.
            We share trusted guides, tips, and care solutions for all furry friends.
          </p>

          <div className="flex gap-4 mt-5">
            <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-amber-100 transition">
              <FaFacebook className="text-blue-600 text-xl" />
            </a>
            <a href="#" className="p-2 bg-white rounded-full shadow hover:bg-amber-100 transition">
              <FaInstagram className="text-pink-500 text-xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-amber-600">Home</Link></li>
            <li><Link to="/aboutUs" className="hover:text-amber-600">About Us</Link></li>
            <li><Link to="/" className="hover:text-amber-600">Winter Tips</Link></li>
            <li><Link to="/contactUs" className="hover:text-amber-600">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="flex items-center gap-3 mb-3 text-primary">
            <FaEnvelope className="text-primary" /> support@warmPaws.com
          </p>
          <p className="flex items-center gap-3 mb-3 text-slate-700">
            <FaPhone className="text-primary" /> +880 1234-567890
          </p>
          <p className="text-accent">
            Dhaka, Bangladesh
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 border-t border-white/40 text-accent">
        © {new Date().getFullYear()} WarmPaws— All Rights Reserved.
      </div>
    </footer>
  );

};

export default FooterUp;