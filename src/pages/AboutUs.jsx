import React from "react";
import { FaPaw, FaSnowflake, FaHeart, FaShieldAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="container mx-auto bg-orange-50">
      {/* Hero Section */}
      <section className="h-[60vh] container mx-auto py-16  flex flex-col md:flex-row gap-6 items-center px-6">
        
          {/* IMAGE SIDE */}
          <div className="flex-1 px-6 py-6 w-[60vw] h-[60vh]">
            <img
              src="https://i.ibb.co/Dgs6Vvn0/ban1.jpg"
              alt="Pet Winter Care"
              className="rounded-3xl shadow-lg w-full h-full"
            />
          </div>

          {/* TEXT SIDE */}
          <div className="flex-1">
            <p className="text-accent text-lg leading-relaxed">
              At <strong className="text-primary">WarmPaws</strong>, we make
              sure your furry friends stay warm, healthy, and happy during the
              cold months. Our care guides, tips, and expert recommendations
              help pet parents confidently protect their companions from harsh
              winter conditions.
            </p>
          </div>
      
      </section>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16">
        <h2
          data-aos="fade-up"
          data-aos-delay="0"
          className="font-semibold text-3xl text-primary text-center my-10 flex items-center justify-center gap-2"
        >
          <FaPaw className="text-amber-600" /> <span className="text-amber-600">Who</span> We Are
        </h2>

        <p className="text-lg leading-relaxed max-w-4xl mx-auto text-center text-accent">
          At <strong className="text-primary">WarmPaws</strong>, we believe
          every paw deserves warmth, comfort, and protection—especially during
          harsh winter months. Our platform provides science-backed winter tips,
          care routines, and practical guides to help pet owners protect their
          fur babies from cold, dryness, cracked paws, and other seasonal
          problems.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="bg-orange-50 py-16 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <h2
            data-aos="fade-up"
            data-aos-delay="0"
            className="font-semibold text-3xl text-primary text-center mb-12"
          >
            Our Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow hover:shadow-md transition border-t-4 border-secondary hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <FaSnowflake /> Mission
              </h3>
              <p className="text-accent leading-relaxed">
                Our mission is to empower pet parents with simple, safe, and
                effective winter care practices that keep their companions warm,
                healthy, and active. We aim to make winter a season of joy—not
                discomfort—for every pet.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow hover:shadow-md transition border-t-4 border-secondary hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <FaHeart /> Vision
              </h3>
              <p className="text-accent leading-relaxed">
                We envision becoming the most trusted winter-care resource for
                pets—helping build a world where animal warmth, comfort, and
                well-being always come first, regardless of weather conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-6 py-20">
        <h2
          data-aos="fade-up"
          data-aos-delay="0"
          className="font-semibold text-3xl text-primary text-center mb-14"
        >
          Why <span className="text-amber-600">Choose</span> Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center hover:-translate-y-2">
            <FaShieldAlt className="text-4xl text-primary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-primary">Trusted Guidance</h4>
            <p className="text-accent">
              Expert-approved winter tips designed for pet safety and comfort.
            </p>
          </div>

          <div className="bg-white hover:-translate-y-2 p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
            <FaPaw className="text-4xl text-amber-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-primary">
              Pet-Friendly Solutions
            </h4>
            <p className="text-accent">
              Safe, natural, and easy routines suitable for all breeds and
              sizes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center hover:-translate-y-2">
            <FaSnowflake className="text-4xl text-primary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-primary">Winter-Ready Tips</h4>
            <p className="text-accent">
              From paw care to diet advice—we prepare pets for every cold day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
