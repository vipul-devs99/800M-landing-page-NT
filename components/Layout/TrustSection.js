import { Clock, Star, Truck, Users, Phone, ShieldCheck  } from 'lucide-react'
import React from "react";
import Call from "../../public/assets/Icon/phone.svg";
import WhatsApp from "../../public/assets/Icon/whatsapp.svg";
import ButtonPrimary from '../misc/ButtonPrimary';


export default function TrustSection() {
  return (
    <div className="bg-black-900 text-white px-6 py-12 md:py-16" id='about'>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main stat */}
          <div className="text-center md:text-left flex justify-center items-center flex-col">
            <div className="text-5xl md:text-6xl font-bold text-yellow-500">10,000</div>
            <div className="text-xl md:text-2xl mt-2 text-yellow-500">HAPPY CUSTOMERS</div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-yellow-500/10">
                <Truck className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl text-start font-bold text-yellow-500">40+</div>
                <div className="text-sm text-white-500">On-Road Vehicles</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-yellow-500/10">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-start text-yellow-500">7+</div>
                <div className="text-sm text-white-500">Years of Experience</div>
              </div>
            </div>


            <div className="flex items-center gap-3 sm:col-span-1">
              <div className="p-2 rounded-full bg-yellow-500/10">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-start text-yellow-500">500+</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white-500">Google Review</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-bold">4.9</span>
                    <Star className="w-4 h-4 text-yellow-500 ml-1 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:col-span-1">
              <div className="p-2 rounded-full bg-yellow-500/10">
                <ShieldCheck  className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-start text-yellow-500"></div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white-500">Certified Batteries</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-bold"></span>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  lg:flex-row justify-start lg:items-center gap-2">
              <ButtonPrimary>
                <a
                  href="https://wa.me/+971509344668?text=Can I get more details about your service?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center text-xs lg:text-sm py-1 w-32 mx-auto"
                >
                  <WhatsApp className="lg:h-6 lg:w-6 h-4 w-4 mr-2 text-white-500 " />
                  <span className="">WhatsApp Us!</span>
                </a>
              </ButtonPrimary>
              <button
                className={
                  "py-3 lg:py-3 px-6 lg:px-16 text-white-500 font-semibold rounded-lg bg-black-600 hover:shadow-yellow-md transition-all outline-none min-w-32 max-w-44 border-white-500/20 border"
                }
              >
                <a
                  href="tel:+971509344668"
                  className="flex justify-center items-center text-xs lg:text-sm py-1 w-44 mx-auto"
                >
                  <Call className="lg:h-6 lg:w-6 h-4 w-4 mr-2 text-white-500 " />
                  <span className="">Call Now!</span>
                </a>
              </button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  )
}

