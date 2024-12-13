import { Phone, Wrench, Repeat1, CreditCard } from "lucide-react";
import CallButton from "../misc/CallButton";
import WhatsappButton from "../misc/WhatsappButton";

export default function HowItWorks() {
  return (
    <div className="bg-yellow-200">
      <div className="w-full mx-auto px-4 py-12 max-w-7xl">
        <div className="container mx-auto text-center px-4 pt-10">
        {/* Section Title */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <span className="block w-10 h-1 bg-yellow-500 mr-2"></span>
            <h2 className="text-yellow-500 font-semibold text-xl  uppercase">
            Here’s How It Works
            </h2>
            <span className="block w-10 h-1 bg-yellow-500 ml-2"></span>
           
          </div>
          <h3 className="text-black-900 font-semibold text-3xl mb-4">Smooth and Efficient Assistance, Everytime

          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
        Discover how our team supports you at every step, ensuring a seamless and hassle-free car battery service experience.

        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center space-y-4 border-0  shadow-yellow-md- border-gray-500 hover:border-yellow-500 rounded-lg p-8 transition-all relative">
            {/* Animated Flow Line */}
            <div className="absolute lg:-top-10 -top-8  right-0 left-0 bottom-0  w-full h-full pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 L100,50"
                  stroke="#F4B03E"
                  strokeWidth="5"
                  strokeDasharray="5,5"
                  strokeDashoffset="0"
                  fill="none"
                  className="animate-flow"
                />
              </svg>
              </div>

            {/* Icon and Content */}
            <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center z-10">
              <Phone className="w-8 h-8 text-white-500" />
            </div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="text-gray-600 text-sm">Reach out to us via call or WhatsApp for instant assistance anytime.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center space-y-4 border-0  shadow-yellow-md- border-gray-500 hover:border-yellow-500 rounded-lg p-8 transition-all relative">
            {/* Animated Flow Line */}
            <div className="absolute lg:-top-10 -top-8  right-0 left-0 bottom-0  w-full h-full pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 L100,50"
                  stroke="#F4B03E"
                  strokeWidth="5"
                  strokeDasharray="5,5"
                  strokeDashoffset="0"
                  fill="none"
                  className="animate-flow"
                />
              </svg>
              </div>

            {/* Icon and Content */}
            <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center z-10">
              <Repeat1 className="w-8 h-8 text-white-500" />
            </div>
            <h3 className="text-xl font-semibold">Quick Response</h3>
            <p className="text-gray-600 text-sm">
            Our skilled technicians arrive at your location within 30 minutes.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center space-y-4  rounded-lg p-8 transition-all relative">
           {/* Animated Flow Line */}
           <div className="absolute lg:-top-10 -top-8  right-0 left-0 bottom-0  w-full h-full pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 L100,50"
                  stroke="#F4B03E"
                  strokeWidth="5"
                  strokeDasharray="5,5"
                  strokeDashoffset="0"
                  fill="none"
                  className="animate-flow"
                />
              </svg>
              </div>
            {/* Icon and Content */}
            <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center z-10">
              <Wrench className="w-8 h-8 text-white-500" />
            </div>
            <h3 className="text-xl font-semibold">Battery Replaced</h3>
            <p className="text-gray-600 text-sm">
            Experience fast, professional installation with high-quality batteries guaranteed to perform.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center space-y-4  rounded-lg p-8 transition-all relative">
            {/* Animated Flow Line */}
            <div className="absolute lg:-top-10 -top-8  right-0 left-0 bottom-0  w-full h-full pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 L100,50"
                  stroke="#F4B03E"
                  strokeWidth="5"
                  strokeDasharray="5,5"
                  strokeDashoffset="0"
                  fill="none"
                  className="animate-flow"
                />
              </svg>

              <style>
                {`
                  @keyframes flow {
                    0% {
                      stroke-dashoffset: 0;
                    }
                    100% {
                      stroke-dashoffset: -20;
                    }
                  }
                  .animate-flow {
                    animation: flow 2s linear infinite;
                  }
                `}
              </style>
            </div>

            {/* Icon and Content */}
            <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center z-10">
              <CreditCard className="w-8 h-8 text-white-500" />
            </div>
            <h3 className="text-xl font-semibold">Payment Options</h3>
            <p className="text-gray-600 text-sm">
            Pay conveniently with flexible options, after the service is completed to your satisfaction.

            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
              
        <CallButton name="Call Now!"/>
        <WhatsappButton name="WhatsApp!"/>
            </div>
        
      </div>
    </div>
  );
}
