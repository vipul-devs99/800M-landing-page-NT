import React, { useMemo } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { ChevronRight , ChevronLeft } from 'lucide-react';


// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-lg p-2 rounded-full"
    onClick={onClick}
  >
    <ChevronRight className="text-gray-700" />
  </div>
);

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10 cursor-pointer bg-white shadow-lg p-2 rounded-full"
    onClick={onClick}
  >
    <ChevronLeft className="text-gray-700" />
  </div>
);

const BatterySection = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  // Slider settings
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl px-10 sm:px-8 lg:px-20 mx-auto flex flex-col w-full text-center justify-center items-center my-16" id="products">
         
        <ScrollAnimationWrapper>
           

            <div className="container mx-auto text-center px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <span className="block w-10 h-1 bg-yellow-500 mr-2"></span>
            <h2 className="text-yellow-500 font-semibold text-xl  uppercase">
            Our Battery Brands

            </h2>
            <span className="block w-10 h-1 bg-yellow-500 ml-2"></span>
           
          </div>
          <h3 className="text-black-900 font-semibold text-3xl mb-4">Powering Your Car with the Best

          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
        We use only the finest battery brands to ensure top-notch performance and reliability for your vehicle.
        </p>
      </div>
          </ScrollAnimationWrapper> 
      <div className="flex flex-col w-full mt-10 lg:mb-48 mb-12">
        <ScrollAnimationWrapper>
          <motion.div className="w-full mt-4 relative" variants={scrollAnimation}>
            <Slider {...sliderSettings}>
              <div className="flex justify-center items-center">
                <img
                  src="./assets/800b/ac-delco.webp"
                  className="lg:h-14 h-10  w-auto"
                  alt="AC Delco car battery replacement"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="./assets/800b/amaron-battery.webp"
                  className="lg:h-14 h-10  w-auto"
                  alt="Amaron auto battery replacement"
                />
              </div>
             
             
              <div className="flex justify-center">
                <img
                  src="./assets/800b/bosch.webp"
                  className="h-12 w-auto"
                  alt="Bosch automobile battery replacement"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="./assets/800b/fiamm.webp"
                  className="h-12 w-auto"
                  alt="fiamm auto battery service"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="./assets/800b/Energizer.webp"
                  className="lg:h-14 h-10  w-auto"
                  alt="Energizer car battery change"
                />
              </div>
              
              <div className="flex justify-center">
                <img
                  src="./assets/800b/varta.webp"
                  className="h-12 w-auto"
                  alt="varta car battery services"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="./assets/800b/excide-batteries.webp"
                  className="h-12 w-auto"
                  alt="excide auto battery service near me"
                />
              </div>
            </Slider>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default BatterySection;
