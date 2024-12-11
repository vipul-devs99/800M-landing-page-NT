import React from "react";
// import LogoVPN from "../../public/assets/logo-yellow.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-black-900 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">

          <Image
            src="/assets/800bLogo.webp"
            alt="logo"
            width={120}
            height={42}
            className=""
          />
          <p className="my-4 text-white-500">
            Your trusted superhero mechanic, providing 24/7 on-site car repair
            services across Dubai. Fast, reliable, and always ready to save the
            day!
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
  <a 
    href="https://www.facebook.com/profile.php?id=61565118175123" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
  >
    <Facebook className="h-6 w-6" />
  </a>
  <a 
    href="https://www.instagram.com/800b.battery/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
  >
    <Instagram className="h-6 w-6" />
  </a>
</div>

          <Image
            src="/assets/GmapCode.webp"
            alt="logo"
            width={80}
            height={80}
            className=""
          />
          <p className="text-gray-400 mt-8">
            Copyright ©{new Date().getFullYear()} - 800Mechanic
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-white-500 mb-4 font-medium text-lg">Quick Link</p>
          <ul className="text-black-500 ">
            <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              Home{" "}
            </li>
            <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              About{" "}
            </li>
            <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              Services{" "}
            </li>
           
            <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              Testimonial{" "}
            </li>
            <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              Contact{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-white-500 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              800Mechanic ?{" "}
            </li>
            <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
           
           
            <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-white-500 mb-4 font-medium text-lg">
            Contact Info
          </p>
          <ul className="text-black-500">
            <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              <a href="tel:+971509344668">+971 50 934 4668</a>
            </li>
            <li className="my-2 text-white-500 hover:text-yellow-500 cursor-pointer transition-all">
              <a href="mailto:support@800bbattery.com">
                support@800bbattery.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
