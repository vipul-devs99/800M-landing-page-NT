import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";
import Call from "../public/assets/Icon/phone.svg";
import WhatsApp from "../public/assets/Icon/whatsapp.svg";

const features = [
  "24/7 Emergency Service",
  "Free Installation",
  "1-Year Warranty",
  "Expert Technicians at Your Doorstep",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="services"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-4 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/key-features_510x420.webp"
              alt="automotive battery servicing"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
              className="rounded"
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col lg:mt-10  justify-center ml-auto w-full "
            variants={scrollAnimation}
          >
            <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <span className="block w-10 h-1 bg-yellow-500 mr-2"></span>
            <h2 className="text-yellow-500 font-semibold text-xl  uppercase">
            Key Service Benefits
            </h2>
            <span className="block w-10 h-1 bg-yellow-500 ml-2"></span>
           
          </div>
          <h3 className="text-black-900 font-semibold text-3xl mb-4">Fast, Reliable, and Professional Car Battery Replacement in UAE.
          </h3>
        </div>
            
            
            <ul className="text-black-500 self-start list-inside ml-8 mb-4 mt-4">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list mb-2 ml-3"
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
            <div className="flex justify-start items-center gap-2">
              
              <button
                className={
                  "py-3 lg:py-3 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-black-600 hover:shadow-yellow-md transition-all outline-none "
                }
              >
                <a
                  href="tel:+971509344668"
                  className="flex justify-center items-center text-xs lg:text-sm py-1 "
                >
                  <Call className="lg:h-6 lg:w-6 h-4 w-4 mr-2 text-white-500 " />
                  <span className="">Call Now!</span>
                </a>
              </button>
              <ButtonPrimary>
                <a
                  href="https://wa.me/+971509344668?text=Can I get more details about your service?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-xs lg:text-sm py-1"
                >
                  <WhatsApp className="lg:h-6 lg:w-6 h-4 w-4 mr-2 text-white-500 " />
                  <span className="">WhatsApp!</span>
                </a>
              </ButtonPrimary>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
