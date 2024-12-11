import React from "react";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-black-900 pt-44 pb-20">
      <div className="max-w-screen-xl mx-auto w-full px-6 sm:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=" ">
          <Image
            src="/assets/800bLogo.webp"
            alt="logo"
            width={120}
            height={42}
            className=""
          />
          <p className="my-4 text-white-500 lg:w-8/12">
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
         
        </div>
       <div className="grid grid-cols-1 lg:grid-cols-3">
       <div className=" ">
          <p className=" mb-4 font-bold text-lg text-yellow-500">Quick Link</p>
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
        <div className="">
          <p className=" mb-4 font-bold text-lg text-yellow-500">Engage</p>
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
        <div className="">
          <p className=" mb-4 font-bold text-lg text-yellow-500">
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
       <p className="text-gray-400 mt-4">
            Copyright ©{new Date().getFullYear()} - 800Mechanic
          </p>
      </div>
    </div>
  );
};

export default Footer;
