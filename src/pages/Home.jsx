import React from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../components/serviceCard";
import WinterTips from "../components/WinterTips";
import Vets from "../components/Vets";
import Essentials from "../components/Essentials";
import BannerSlide from "../components/BannerSlide";
import Banner from "../components/Banner";

const Home = () => {
  const services = useLoaderData();

  return (
    <div className="bg-orange-50">
      {/* Banner */}
      <Banner></Banner>
      {/* <BannerSlide></BannerSlide> */}

      {/* popular winter care services */}
      <h2
        data-aos="fade-up"
        data-aos-delay="0"
        className="font-semibold text-3xl text-center text-primary pt-8 "
      >
        Popular Winter Care <span className="text-amber-600">Services</span>
      </h2>
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.serviceId} service={service}></ServiceCard>
        ))}
      </div>

      {/* Winter tips */}
      <h2
        data-aos="fade-up"
        data-aos-delay="0"
        className="font-semibold text-3xl text-center text-primary py-8"
      >
        Winter Care <span className="text-amber-600">Tips</span> for Pets
      </h2>
      <WinterTips></WinterTips>

      {/* Pet essentials */}
      <h2
        data-aos="fade-up"
        data-aos-delay="0"
        className="font-semibold text-3xl text-center text-primary py-8"
      >
        Handpicked <span className="text-amber-600">Essentials</span> Your Pet Will Love
      </h2>
      <Essentials></Essentials>

      {/* Vets */}
      <h2
        data-aos="fade-up"
        data-aos-delay="0"
        className="font-semibold text-3xl text-center text-primary py-8"
      >
        Meet Our Expert <span className="text-amber-600">Vets</span>
      </h2>
      <Vets></Vets>
    </div>
  );
};

export default Home;
