import React from "react";
import Call from "../../public/assets/Icon/phone.svg";

const CallButton = ({name}) => {
  return (
    <div>
      <button
        className={
          "py-3 lg:py-3 px-4  lg:px-16 text-white-500 font-semibold rounded-lg bg-black-600 hover:shadow-yellow-md transition-all outline-none "
        }
      >
        <a
          href="tel:+971509344668"
          className="flex justify-center items-center text-xs lg:text-sm py-1 "
        >
          <Call className="lg:h-6 lg:w-6 h-4 w-4 mr-2 text-white-500 " />
          <span className=""> {name|| "Call Now!"}</span>
        </a>
      </button>
    </div>
  );
};

export default CallButton;
