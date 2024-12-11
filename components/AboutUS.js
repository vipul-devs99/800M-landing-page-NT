import React from 'react'

const AboutUS = () => {
  return (
    <div className="bg-yellow-200 text-white py-16 mt-14">
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
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you
          need to be sure there isn’t anything embarrassing hidden in the
          middle of text.
        </p>
      </div>
    </div>
  )
}

export default AboutUS