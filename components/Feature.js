import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";
import WhatsAppDark from "../public/assets/Icon/whatsapp.svg";

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
      id="about"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl text-start font-medium leading-relaxed text-black-600">
              Key Service Benefits
            </h3>
            <p className="my-2 text-black-500">
              Fast, Reliable, and Professional Car Battery Replacement in UAE.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8 mb-4 mt-4">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list mb-2"
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
            <ButtonPrimary>
              <a
               href="https://wa.me/+971509344668?text=Can I get more details about your service?"
               target="_blank"
               rel="noopener noreferrer"
                className="flex justify-center items-center text-xs lg:text-sm py-1"
              >
                <WhatsAppDark className="lg:h-6 lg:w-6 h-4 w-4 mr-2 text-black-900 " />
                <span className="">WhatsApp Us!</span>
              </a>
            </ButtonPrimary>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
