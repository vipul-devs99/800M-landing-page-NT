import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

import CallButton from "./misc/CallButton";
import WhatsappButton from "./misc/WhatsappButton";

const features = [
  "No Hidden Fees – Delivery and Service Are Free",
  "Enjoy a 24-Month Warranty on Your New Battery",
  "Free Car Battery Jumpstart and Full Inspection",
 
];

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-white-500 lg:bg-[url('../public/assets/banner-background-1920x700.jpg')] lg:bg-cover lg:bg-center">

    
    <div
      className="max-w-screen-xl lg:pt-20 lg:pb-20 pb-20 mt-20 lg:px-8 px-4 xl:px-16 mx-auto "
      id="home"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 mt-2 lg:mt-0">
            <h1 className="text-3xl lg:text-3xl xl:text-4xl font-medium text-black-600 ">
              Get Your Battery Replaced in 25 Minutes Fast.
            </h1>
            <h2 className="text-yellow-500 font-semibold text-xl  uppercase mt-4">
            Reliable Service
            Anytime, Anywhere.
            </h2>
            <div>
  <p className="text-black-900 mt-4 mb-6 font-semibold bg-yellow-500/20 p-2 border-2 border-dashed border-yellow-500 animate-text">
  Get 15% winter offer for battery replacement 
  </p>
 
</div>

<style>
  {`
    @keyframes slideUpFadeIn {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-text {
      animation: slideUpFadeIn 1s ease-out;
    }

    @keyframes slideUpFadeInNew {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-text-new {
      animation: slideUpFadeInNew 1.5s ease-out;
    }
  `}
</style>



            <ul className="text-black-500 self-start list-inside ml-10 mb-4">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list mb-2 mt-2"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
            <div className="flex justify-center items-center gap-2">
              
              <CallButton name="Call Now!"/>
              <WhatsappButton name="WhatsApp!"/>
            </div>
          </div>
          <div className="flex w-full lg:hidden ">
            <motion.div
              className="h-full w-full rounded"
              variants={scrollAnimation}
            >
              <Image
                src="/assets/image-1500x1000.webp"
                alt="car battery replacement service"
                quality={100}
                width={612}
                height={483}
                layout="responsive"
                className="rounded-md"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
