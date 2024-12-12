import React from 'react'

const AboutUS = () => {
  return (
    <div className="bg-yellow-200 text-white py-16 mt-14" id='about'>
      <div className="container mx-auto text-center px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <span className="block w-10 h-1 bg-yellow-500 mr-2"></span>
            <h2 className="text-yellow-500 font-semibold text-xl  uppercase">
              About Us
            </h2>
            <span className="block w-10 h-1 bg-yellow-500 ml-2"></span>
           
          </div>
          <h3 className="text-black-900 font-semibold text-3xl mb-4">Fast and Reliable Car Battery Services
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
        From emergency roadside assistance to onsite auto battery replacement, 800 B Battery is your ultimate destination for car battery services. We deliver fast, professional, and hassle-free solutions to keep your vehicle running smoothly. Prompt assistance and expert advice are the pillars of our automobile battery replacement services. Our services help you get back on the road– we know your time and safety are important.

        </p>
      </div>
    </div>
  )
}

export default AboutUS