import Image from "next/image";

import {
  RocketIcon,
  Settings2Icon,
  MonitorSmartphoneIcon,
  Clock4Icon,
  Award,
  BadgeCheck,
} from "lucide-react";
import ButtonPrimary from "./misc/ButtonPrimary";
import Call from "../public/assets/Icon/phone.svg";
import WhatsApp from "../public/assets/Icon/whatsapp.svg";

export default function SecurityLanding() {
  return (
    <div className=" py-12 bg-yellow-200 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16  grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
        

        <div className="space-y-8">
          <div>
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <span className="block w-10 h-1 bg-yellow-500 mr-2"></span>
                <h2 className="text-yellow-500 font-semibold text-xl  uppercase">
                  Why Choose Us
                </h2>
                <span className="block w-10 h-1 bg-yellow-500 ml-2"></span>
              </div>
              <h3 className="text-black-900 font-semibold text-3xl mb-4">
                Lorem, epsum, and Lorem Car lorem Replacement in UAE.
              </h3>
            </div>

            <p className="text-gray-600">
              Choose 800 B Battery for reliable, fast, and convenient{" "}
              <strong>car battery services</strong>. We provide up to 18 months
              of warranty on all our products and services, and flexible payment
              plans. Our team is available 24/7 and will reach your location
              within 25 minutes, ensuring minimal disruption to your{" "}
              <strong>car battery changes</strong>. Our premium German-brand
              batteries, guarantee top-notch performance and longevity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex justify-start items-center gap-1">
              <div className="p-1 bg-blue-50 rounded-lg">
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold text-black-900 mb-1">
                  Licensed Technicians
                </h3>
              </div>
            </div>

            <div className="flex justify-start items-center gap-1">
              <div className="p-1 bg-blue-50 rounded-lg">
                <BadgeCheck className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold text-black-900 mb-1">
                  100% Genuine Products
                </h3>
              </div>
            </div>

            <div className="flex justify-start items-center gap-1">
              <div className="p-1 bg-blue-50 rounded-lg">
                <RocketIcon className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold text-black-900 mb-1">
                  10,000+ Batteries Replaced
                </h3>
              </div>
            </div>

            <div className="flex justify-start items-center gap-1">
              <div className="p-1 bg-blue-50 rounded-lg">
                <Clock4Icon className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold text-black-900 mb-1">
                  Serving UAE for 5+ Years
                </h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col  lg:flex-row justify-start lg:items-center gap-2">
            
            <button
              className={
                "py-3 lg:py-3 px-6 lg:px-16 text-white-500 font-semibold rounded-lg bg-black-600 hover:shadow-yellow-md transition-all outline-none min-w-32 max-w-44 border-white-500/20 border"
              }
            >
              <a
                href="tel:+971509344668"
                className="flex justify-center items-center text-xs lg:text-sm py-1 w-44 lg:w-40 mx-auto"
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
                className="flex justify-center items-center text-xs lg:text-sm py-1 w-32 mx-auto"
              >
                <WhatsApp className="lg:h-6 lg:w-6 h-4 w-4 mr-2 text-white-500 " />
                <span className="">Get Expert!</span>
              </a>
            </ButtonPrimary>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/assets/key-features_510x420.webp"
              alt="car battery replacement"
              layout="responsive"
              quality={100}
              height={100}
              width={108}
              className="h-44"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-800 p-6 ">
            <div className="flex items-center gap-2 text-white">
              <RocketIcon className="w-6 h-6" />

              <p className="lg:text-sm text-xs font-semibold text-black-900 typewriter">
                We have completed more than 10,000+ Battery Replacements.
              </p>

              <style>
                {`
    @keyframes typewriter {
      0% {
        width: 0;
      }
      70% {
        width: 100%;
      }
      85% {
        border-right-color: black;
      }
      100% {
        width: 100%;
        border-right-color: transparent;
      }
    }

    .typewriter {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      border-right: 2px solid black;
      animation: typewriter 5s steps(50) infinite;
    }
  `}
              </style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
