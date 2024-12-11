import React from "react";
import Phone from "../../public/assets/Icon/phone.svg";
import WhatsApp from "../../public/assets/Icon/whatsapp.svg";

const FixedContactButton = () => {
  return (
    <div className="fixed lg:bottom-8 bottom-20 right-4 flex flex-col gap-3 z-50 ">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+971509344668?text=Can I get more details about your service?"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center bg-yellow-500 text-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-110 p-4 border-white-500/50 border"
      >
        <WhatsApp className="h-6 w-6 text-white" />
        {/* <span className="absolute left-full opacity-0 group-hover:left-12 group-hover:opacity-100 transition-all duration-300 text-sm font-semibold">
          WhatsApp Us!
        </span> */}
      </a>

      {/* Call Now Button */}
      <a
        href="tel:+971509344668"
        className="group relative flex items-center justify-center bg-black-900 text-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-110 p-4 border-white-500/50 border"
      >
        <Phone className="h-6 w-6 text-white" />
        {/* <span className="absolute left-full opacity-0 group-hover:left-12 group-hover:opacity-100 transition-all duration-300 text-sm font-semibold">
          Call Now!
        </span> */}
      </a>
    </div>
  );
};

export default FixedContactButton;
