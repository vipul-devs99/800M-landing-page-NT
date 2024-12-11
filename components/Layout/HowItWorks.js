import { Phone, Wrench, Repeat1, CreditCard   } from 'lucide-react'

export default function HowItWorks() {
  return (
    <div className=' bg-yellow-200'>
    <div className="w-full  mx-auto px-4 py-12 max-w-7xl">
     
      <h3 className="text-3xl lg:text-4xl text-center font-medium leading-relaxed text-black-600 mb-12">
      Here’s How It Works
            </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connecting lines */}
          {/* <div className="hidden lg:block absolute top-[25%] left-[25%] w-[50%] h-[50%] pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M0,50 C25,50 25,75 50,75 C75,75 75,25 100,25"
                stroke="#F4B03E"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
            </svg>
          </div> */}

        {/* Step 1 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-white-500 flex items-center justify-center">
            <Phone className="w-8 h-8 text-orange-400" />
          </div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="text-gray-600 text-sm">
          Call or WhatsApp us.

          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-white-500 flex items-center justify-center">
            <Repeat1 className="w-8 h-8 text-orange-400" />
          </div>
          <h3 className="text-xl font-semibold">Quick Response</h3>
          <p className="text-gray-600 text-sm">
          Our technicians will reach you in under 30 minutes.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-white-500 flex items-center justify-center">
            <Wrench className="w-8 h-8 text-orange-400" />
          </div>
          <h3 className="text-xl font-semibold">Battery Replaced</h3>
          <p className="text-gray-600 text-sm">
          Fast and professional installation.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-white-500 flex items-center justify-center">
            <CreditCard className="w-8 h-8 text-orange-400" />
          </div>
          <h3 className="text-xl font-semibold">Payment Options</h3>
          <p className="text-gray-600 text-sm">
          Easy payment after the job is done.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
         href="tel:80063242642"
          className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-orange-400 rounded-md hover:bg-orange-500 transition-colors"
        >
         <Phone className="w-6 h-6 text-orange-400 mr-2" /> CALL US FOR HELP
        </a>
      </div>
    </div>
    </div>
  )
}

