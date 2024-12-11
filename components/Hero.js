import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Call from "../public/assets/Icon/phone.svg";
import WhatsApp from "../public/assets/Icon/whatsapp.svg";

const features = [
  "No Hidden Fees – Delivery and Service Are Free",
  "Enjoy a 24-Month Warranty on Your New Battery",
  "Free Car Battery Jumpstart and Full Inspection",
  "Will  Get 15% winter offer for battery replacement",
];

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl lg:mt-28 mt-20 lg:px-8 px-4 xl:px-16 mx-auto"
      id="home"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 mt-6 lg:mt-0">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-normal">
              Get Your Battery Replaced in 25 Minutes Fast, Reliable Service
              Anytime, Anywhere.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              ( Get 15% winter offer for battery replacement )
            </p>
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
              <ButtonPrimary>
                <a
                  href="https://wa.me/+971509344668?text=Can I get more details about your service?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-xs lg:text-sm py-1"
                >
                  <WhatsApp className="lg:h-6 lg:w-6 h-4 w-4 mr-2 text-white-500 " />
                  <span className="">WhatsApp Us!</span>
                </a>
              </ButtonPrimary>
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
            </div>
          </div>
          <div className="flex w-full">
            <motion.div
              className="h-full w-full rounded"
              variants={scrollAnimation}
            >
              <Image
                src="/assets/heroBanner.webp"
                alt="800 Illustrasi"
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
        {/* <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-2 sm:grid-cols-4 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-10/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex lg:flex-row flex-col">
                <div className="flex items-center justify-center bg-yellow-100 w-12 h-12 mr-2 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6 " />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper> */}
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
