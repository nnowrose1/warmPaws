import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";
import Aos from "aos";

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
        centeredSlides={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        onSlideChange={() => Aos.refresh()}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[70vh] flex flex-col justify-center items-center text-center text-white object-cover bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div
                className="text-center text-white px-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p
                  data-aos="fade-in"
                  data-aos-delay="400"
                  className="text-lg md:text-xl max-w-2xl mx-auto mb-6"
                >
                  {slide.desc}
                </p>
                <Link to={"/services"}>
                  {" "}
                  <button
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    className="bg-[#FBBF24] hover:bg-[#E59E0C] text-black font-semibold px-6 py-3 rounded-full transition-all duration-300"
                  >
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
