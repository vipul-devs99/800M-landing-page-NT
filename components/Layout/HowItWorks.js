import { Phone, Truck, Wrench, Car } from 'lucide-react'

export default function HowItWorks() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-yellow-200">
     
      <h3 className="text-3xl lg:text-4xl text-center font-medium leading-relaxed text-black-600 mb-8">
      How It Works?
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
          <h3 className="text-xl font-semibold">Call 800-78278</h3>
          <p className="text-gray-600 text-sm">
            Just call 800-78278 and our expert customer care agents will assist you with all your queries within 2 minutes of your call.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-white-500 flex items-center justify-center">
            <Truck className="w-8 h-8 text-orange-400" />
          </div>
          <h3 className="text-xl font-semibold">We Deliver To You</h3>
          <p className="text-gray-600 text-sm">
            We Will Deliver The Battery To Your Location In 20 Minutes Anywhere In AbuDhabi, Dubai, Sharajah And Ajman.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-white-500 flex items-center justify-center">
            <Wrench className="w-8 h-8 text-orange-400" />
          </div>
          <h3 className="text-xl font-semibold">We Install It For You Free</h3>
          <p className="text-gray-600 text-sm">
            Our Expert Technicians Shall Replace Your Old Battery With The New One And Handover The Battery Warranty To You.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-white-500 flex items-center justify-center">
            <Car className="w-8 h-8 text-orange-400" />
          </div>
          <h3 className="text-xl font-semibold">Enjoy Your Ride</h3>
          <p className="text-gray-600 text-sm">
            Now, You Are Back On The Road And Trusting Your Ride Has What It Takes For Daily Drive.
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
  )
}

