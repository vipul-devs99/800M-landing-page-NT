import React, { useMemo } from "react";
import Call from "../public/assets/Icon/phone.svg";
import WhatsApp from "../public/assets/Icon/whatsapp.svg";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";


const Emergency = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="max-w-screen-xl h-80 lg:h-0 px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
      <ScrollAnimationWrapper className="relative w-full lg:-mt-80 -mt-[460px]">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
          <div className="absolute rounded-xl border-yellow-300 bg-yellow-300  py-8 sm:py-10 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 ">
            <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
              <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-semibold">
                Stuck? Help Is Just a <br /> Call Away!
              </h5>
              <p className="mt-3">We’ll reach you within 30 minutes.</p>
              <div className="flex justify-start lg:flex-row flex-col items-center gap-2 mt-6 ">
              <button
                className={
                  "py-3 lg:py-3 px-6 lg:px-6  text-white-500 font-semibold rounded-lg bg-yellow-500 hover:shadow-yellow-md transition-all outline-none "
                }
              >
                <a
                  href="tel:+971509344668"
                  className="flex justify-center items-center text-xs lg:text-sm py-1 lg:w-32 w-44 mx-auto"
              
                >
                  <WhatsApp className="lg:h-6 lg:w-6 h-4 w-4 mr-2 text-white-500 " />
                  <span className="">WhatsApp Us!</span>
                </a>
                </button>
              <button
                className={
                  "py-3 lg:py-3 px-6 lg:px-6 text-white-500 font-semibold rounded-lg bg-black-600 hover:shadow-yellow-md transition-all outline-none "
                }
              >
                <a
                  href="tel:+971509344668"
                  className="flex justify-center items-center text-xs lg:text-sm py-1 lg:w-24 w-44 mx-auto"
                >
                  <Call className="lg:h-6 lg:w-6 h-4 w-4 mr-2 text-white-500 " />
                  <span className="">Call Now!</span>
                </a>
              </button>
            </div>
            </div>
            <div>
            <img
                  src="/assets/location.webp"
                  className="lg:h-44 h-44 w-auto rounded-2xl"
                  alt="Map Location"
                />
                </div>
            
          </div>
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Emergency;
