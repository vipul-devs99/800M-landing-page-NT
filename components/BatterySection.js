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
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl px-10 sm:px-8 lg:px-20 mx-auto flex flex-col w-full text-center justify-center items-center my-16">
         
        <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-8/12 mx-auto">
              Our Battery Brands{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-9/12 lg:w-8/12"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </motion.p>
          </ScrollAnimationWrapper> 
      <div className="flex flex-col w-full mt-10 mb-48">
        <ScrollAnimationWrapper>
          <motion.div className="w-full mt-4 relative" variants={scrollAnimation}>
            <Slider {...sliderSettings}>
              <div className="flex justify-center items-center">
                <img
                  src="/assets/800b/ac-delco.webp"
                  className="lg:h-14 h-10  w-auto"
                  alt="AC Delco car battery replacement"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/800b/amaron-battery.webp"
                  className="lg:h-14 h-10  w-auto"
                  alt="Amaron auto battery replacement
"
                />
              </div>
             
             
              <div className="flex justify-center">
                <img
                  src="/assets/800b/bosch.webp"
                  className="h-12 w-auto"
                  alt="Bosch automobile battery replacement"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/800b/fiamm.webp"
                  className="h-12 w-auto"
                  alt="fiamm auto battery service"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/800b/Energizer.webp"
                  className="lg:h-14 h-10  w-auto"
                  alt="Energizer car battery change"
                />
              </div>
              
              <div className="flex justify-center">
                <img
                  src="/assets/800b/varta.webp"
                  className="h-12 w-auto"
                  alt="varta car battery services"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/800b/excide-batteries.webp"
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
