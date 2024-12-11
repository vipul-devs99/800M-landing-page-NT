import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";



const features = [
 
  "lorem Ipsum lorem Ipsum",
  "lorem Ipsum lorem Ipsum dhjdjh Description",
];
const features2 = [
  "lorem Ipsum lorem Ipsum lorem Ipsum",
  "lorem Ipsumlorem Ipsum",
 
];

const WhyChoose = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-yellow-200/90">
    <div
      className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto"
      id=""
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-16 pt-24">
        
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col justify-start mx-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl text-start font-medium leading-relaxed text-black-600">
            Why Choose Us?
            </h3>
            <p className="my-2 text-black-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
         <div className="flex flex-row gap-6">
         <ul className="text-black-500 self-start list-inside ml-8 mb-4 mt-4">
              {features?.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list mb-6 ml-3"
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
            <ul className="text-black-500 self-start list-inside ml-8 mb-4 mt-4">
              {features2?.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list mb-6 ml-3"
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
         </div>

            {/* <ButtonPrimary>
              <a
               href="https://wa.me/+971509344668?text=Can I get more details about your service?"
               target="_blank"
               rel="noopener noreferrer"
                className="flex justify-center items-center text-xs lg:text-sm py-1"
              >
                <WhatsAppDark className="lg:h-6 lg:w-6 h-4 w-4 mr-2 text-black-900 " />
                <span className="">WhatsApp Us!</span>
              </a>
            </ButtonPrimary> */}
             {/* <button
                className={
                  "py-3 lg:py-3 px-6 lg:px-16  text-white-500 font-semibold rounded-lg bg-black-600 hover:shadow-yellow-md transition-all outline-none"
                }
              >
                <a
                  href="tel:+971509344668"
                  className="flex flex-row mx-auto justify-center items-center text-xs lg:text-sm py-1 w-32"
                >
                  <Call className="lg:h-6 lg:w-6 h-4 w-4 mr-2 text-white-500 " />
                  <span className="">Call Now!</span>
                </a>
              </button> */}
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
             src="/assets/key-features_510x420.webp"
              alt="Services"
              layout="responsive"
              quality={100}
              height={84}
              width={108}
              className="h-44"
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
    </div>
  );
};

export default WhyChoose;
