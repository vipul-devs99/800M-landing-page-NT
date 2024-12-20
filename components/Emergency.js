import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import CallButton from "./misc/CallButton";
import WhatsappButton from "./misc/WhatsappButton";

const Emergency = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className="max-w-screen-xl h-80 lg:h-0 px-4 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center" id="contact">
      <ScrollAnimationWrapper className="relative w-full lg:-mt-80 -mt-96">
        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
          <div className="absolute rounded-xl border-yellow-300 bg-yellow-300 py-8 sm:py-10 px-2 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10">
            <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-8/12 mb-6 sm:mb-0">
              <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-semibold">
                Stuck? Help Is Just a <br /> Call Away!
              </h5>
              <p className="mt-3">We’ll reach you within 25 minutes.</p>
              <div className="flex  gap-2 mt-6  ">
              <CallButton name="Call Now!"/>
              <WhatsappButton name="WhatsApp!"/>
              </div>
            </div>
            <div className="border-2 border-white-500 rounded-2xl mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7356.614853498938!2d55.22415!3d25.120291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f692dd65e4465%3A0xc7b4c46be55cd897!2s800%20BBattery!5e1!3m2!1sen!2sae!4v1734010420602!5m2!1sen!2sae"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="lg:h-48 h-44 lg:w-96 w-auto rounded-2xl "
                title="Map Location"
              ></iframe>
            </div>
          </div>
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Emergency;
