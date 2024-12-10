import { Clock, Star, Truck, Users, Phone } from 'lucide-react'

export default function TrustSection() {
  return (
    <div className="bg-black-900 text-white px-6 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main stat */}
          <div className="text-center md:text-left flex justify-center items-center flex-col">
            <div className="text-5xl md:text-6xl font-bold text-yellow-500">300,000</div>
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
                <div className="text-2xl font-bold text-start text-yellow-500">13+</div>
                <div className="text-sm text-white-500">Years of Experience</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-yellow-500/10">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-start text-yellow-500">25</div>
                <div className="text-sm text-white-500">Minutes of Turnaround</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-yellow-500/10">
                <Phone className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-start text-yellow-500">24/7</div>
                <div className="text-sm text-white-500">Customer Support</div>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:col-span-2">
              <div className="p-2 rounded-full bg-yellow-500/10">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-start text-yellow-500">11,500+</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white-500">Google Review</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-bold">4.9</span>
                    <Star className="w-4 h-4 text-yellow-500 ml-1 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

