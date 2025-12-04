import React, { use } from "react";
import { FaPaw, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ContactUs = () => {
    const {user} = use(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Message sent successfully!");
        e.target.reset();
    }
  return (
    <div className="container mx-auto bg-linear-to-b from-orange-50 to-orange-200 py-16">
      <div className="w-3/4 mx-auto px-6 lg:px-0">
        
        {/* Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-primary">
            Contact <span className="text-amber-600">Us</span>
          </h2>
          <p className="text-accent mt-3 max-w-2xl mx-auto">
            We’re here to help you keep your furry friends warm, happy, and healthy this winter.
          </p>
        </div>

      

          {/* Form Section */}
          <div
            className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-8 border border-sky-100"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <FaPaw className="text-primary" /> Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 text-accent font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none bg-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-1 text-accent font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none bg-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block mb-1 text-accent font-medium">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none bg-white"
                  placeholder="Write your message..."
                  required
                  rows="4"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-amber-600 text-white py-3 rounded-xl font-semibold transition-all"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 space-y-3 text-accent">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-primary" /> support@warmPaws.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" /> +880 123 456 789
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" /> Dhaka, Bangladesh
              </p>
            </div>
          </div>

        </div>
      </div>
    
  );
};

export default ContactUs;
