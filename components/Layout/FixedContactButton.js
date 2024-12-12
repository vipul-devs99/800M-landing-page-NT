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
        className="group relative flex items-center justify-center bg-green-600 text-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-110 p-4 border-white-500/50 border"
      >
        <WhatsApp className="h-6 w-6 text-white" />
        
      </a>

      {/* Call Now Button */}
      <a
        href="tel:+971509344668"
        className="group relative flex items-center justify-center bg-black-900 text-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-110 p-4 border-white-500/50 border"
      >
        <Phone className="h-6 w-6 text-white" />
        
      </a>
    </div>
  );
};

export default FixedContactButton;
