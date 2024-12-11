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
    slidesToShow: 6,
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
    <div className="max-w-screen-xl px-10 sm:px-8 lg:px-20 mx-auto flex flex-col w-full text-center justify-center items-center">
      <div className="flex flex-col w-full my-16 mb-48">
        <ScrollAnimationWrapper>
          <motion.div className="w-full mt-4 relative" variants={scrollAnimation}>
            <Slider {...sliderSettings}>
              <div className="flex justify-center items-center">
                <img
                  src="/assets/800b/ac-delco.webp"
                  className="lg:h-14 h-10  w-auto"
                  alt="AC Delco"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/800b/amaron-battery.webp"
                  className="lg:h-14 h-10  w-auto"
                  alt="Amaron Battery"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/800b/asimco-mf.webp"
                  className="h-12 w-auto"
                  alt="Asimco MF"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/800b/asimco-plus.webp"
                  className="lg:h-14 h-10  w-auto"
                  alt="Asimco Plus"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/800b/bosch.webp"
                  className="h-12 w-auto"
                  alt="Bosch"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/800b/asimco-mf.webp"
                  className="h-12 w-auto"
                  alt="Asimco MF"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/800b/asimco-plus.webp"
                  className="lg:h-14 h-10  w-auto"
                  alt="Asimco Plus"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/800b/bosch.webp"
                  className="h-12 w-auto"
                  alt="Bosch"
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
