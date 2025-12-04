import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Aos from "aos";
import { Link } from "react-router";

const BannerSlide = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/rGhCVwSm/ban1.jpg",
      title: "Keep Your Pet Warm This Winter ❄️",
      desc: "Soft sweaters and cozy blankets to make your furry friends happy!",
    },
    {
      id: 2,
      image: "https://i.ibb.co/Nn1T690s/pet4.jpg",
      title: "Winter Coats for Cool Cats 🐱",
      desc: "Stay stylish and snug during chilly days with our winter pet wear.",
    },
    {
      id: 3,
      image: "https://i.ibb.co/Dgs6Vvn0/ban1.jpg",
      title: "Paw Protection and Care 🐾",
      desc: "Warm booties and gentle care routines for frost-free paws.",
    },
  ];

  return (
    <section className="relative w-full">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={() => Aos.refresh()}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* FULL FLEX LAYOUT */}
            <div className="w-full max-h-[60vh] h-[60vh] flex flex-col md:flex-row items-center justify-between overflow-hidden bg-linear-to-r from-orange-50 to-orange-200 rounded-lg">
              
              {/* IMAGE SIDE */}
              <div className="w-full md:w-1/2 h-full p-8">
                <img
                  src={slide.image}
                  alt="Pet Winter Banner"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>

              {/* TEXT SIDE */}
              <div
                className="w-full md:w-1/2 px-6 md:px-12 text-center md:text-left flex flex-col justify-center h-full"
                data-aos="fade-up"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                  {slide.title}
                </h2>

                <p className="text-lg md:text-xl text-accent mb-6">
                  {slide.desc}
                </p>

                <Link to="/services">
                  <button className="bg-secondary hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md">
                    Explore Winter Care
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlide;
