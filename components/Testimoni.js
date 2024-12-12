import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Ahmed Khalid",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.9",
      testimoni:
        "I called them for a car battery replacement, and they reached my spot in less than 20 minutes! The team was polite and professional. Now they are my favorite car battery shop near me. 5 stars",
    },
    {
      name: "Mohammed Saeed",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.7",
      testimoni:
        "If you are looking for auto battery replacement, 800 B Battery is the perfect place you can rely on. They use only premium quality products for their customers. It’s great to have a trustworthy car battery shop near me for all my needs",
    },
    {
      name: "Maria Lopez",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "I badly needed an auto battery replacement in the middle of nowhere, and I was hopeless. Somehow, I contacted 800 B Battery and they did their work in a jiffy. Flexible payment options were a bonus! They have the best automobile battery replacement services",
    },
    {
      name: "David Lee",
      image: "/assets/people-3.png",
      city: "Warsaw",
      country: "Poland",
      rating: "4.8",
      testimoni:
        "Got my car battery changed here a few days back. The pricing was fair, and the service was top-notch. I’ll always come back to 800 B Battery for car battery services. Highly recommended",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni?.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-yellow-500 transition-all rounded-lg p-8 flex flex-col lg:h-80">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-yellow-500 border hover:bg-yellow-500 hover:text-white-500 transition-all text-yellow-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-yellow-500 border hover:bg-yellow-500 hover:text-white-500 transition-all text-yellow-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
