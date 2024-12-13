import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import Call from "../../public/assets/Icon/phone.svg";
import WhatsApp from "../../public/assets/Icon/whatsapp.svg";
import Image from "next/image";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-black-900 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-0")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 bg-black-900 lg:px-16 mx-auto grid grid-flow-col py-2 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Image
              src="/assets/800bLogo.webp"
              alt="automobile battery replacement"
              width={120}
              height={42}
              className=""
            />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("home");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "home"
                  ? " text-yellow-500 animation-active "
                  : " text-white-500 hover:text-yellow-500 a")
              }
            >
              Home
            </LinkScroll>
          
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-yellow-500 animation-active "
                  : " text-white-500 hover:text-yellow-500 ")
              }
            >
              About
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="benifits"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("benifits");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "benifits"
                  ? " text-yellow-500 animation-active "
                  : " text-white-500 hover:text-yellow-500 ")
              }
            >
              Benifits
            </LinkScroll>
            
            

            <LinkScroll
              activeClass="active"
              to="testimonial"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimonial");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimonial"
                  ? " text-yellow-500 animation-active "
                  : " text-white-500 hover:text-yellow-500 ")
              }
            >
              Testimonial
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="products"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("products");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "products"
                  ? " text-yellow-500 animation-active "
                  : " text-white-500 hover:text-yellow-500 ")
              }
            >
              Products
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("contact");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "contact"
                  ? " text-yellow-500 animation-active "
                  : " text-white-500 hover:text-yellow-500 ")
              }
            >
              Contact
            </LinkScroll>
          </ul>
          <div className="lg:col-start-10 lg:col-end-12 font-medium flex justify-end items-center">
            <ButtonOutline>
              <a
                href="tel:80063242642"
                className="flex justify-center items-center text-xs lg:text-sm py-1"
              >
                <Call className="lg:h-6 lg:w-6 h-4 w-4 mr-2 text-white-500 " />
                <span className="block lg:hidden">Emergency? Call Now!</span>
                <span className="hidden lg:block">
                  Emergency? Click to call!
                </span>
              </a>
            </ButtonOutline>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      {/* <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className=" sm:px-3">
          <ul className="flex w-full justify-around items-center text-black-500">
           
         
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "services"
                  ? "  border-yellow-500 text-yellow-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 13l-4-4m0 0l-4 4m4-4l-4 4m4-4L6 19a2 2 0 01-2 2h-3v-3l3-3a2 2 0 012 0l7-7a2 2 0 012 2l2 2a2 2 0 012 2v1l-3-3z"
                />
              </svg>
              Services
            </LinkScroll>
            
           
            <LinkScroll
              activeClass="active"
              to="testimonial"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimonial");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimonial"
                  ? "  border-yellow-500 text-yellow-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Testimonial
            </LinkScroll>
          </ul>
        </div>
      </nav> */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-0 sm:px-8 shadow-t ">
  <div className="grid grid-cols-2 gap-0 py-0">
   

    {/* Call Button */}
    <a
      href="tel:+971509344668"
      className="group relative flex items-center justify-center bg-black-900 text-white   p-4 border-white-500/50 border-t "
    >
      <Call className="lg:h-6 lg:w-6 h-6 w-6 mr-2 text-white-500" /> <span className="text-white-500">Call Now!</span>
    </a> {/* WhatsApp Button */}
    <a
      href="https://wa.me/+971509344668?text=Can I get more details about your service?"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center bg-green-600 text-white   hover:shadow-lg  p-4 border-white-500/50 border"
    >
      <WhatsApp className="lg:h-6 lg:w-6 h-6 w-6 mr-2 text-white-500" />
      <span className="text-white-500">WhatsApp!</span>
    </a>
  </div>
</nav>

      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
