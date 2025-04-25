import { Wrench, Wallet, Clock, HandshakeIcon } from "lucide-react"

export default function Advantages() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side with image and experience badge */}
        <div className="relative">
          <img
            src="/servicee7.jpg"
            alt="Mechanic working in garage"
            className="rounded-lg w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-zinc-900 p-6 max-w-[200px]">
            <p className="text-red-600 font-medium text-sm tracking-wider">EXPERIENCED SINCE</p>
            <p className="text-white text-6xl font-bold">2005</p>
          </div>
        </div>

        {/* Right side with advantages */}
        <div className="space-y-8">
          <div>
            <h3 className="text-red-600 font-medium tracking-wider mb-2">OUR ADVANTAGES</h3>
            <h2 className="text-5xl font-bold text-zinc-900">WHY CHOOSE US</h2>
          </div>

          <p className="text-zinc-600">
          We also provide servicing for electric bikes,
           ensuring they perform to their full potential.
           A thorough inspection of your bike to ensure every
            part is functioning properly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Advantage 1 */}
            <div className="bg-red-600 p-8 rounded-lg text-center text-white">
              <div className="flex justify-center mb-4">
                <Wrench className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold">Expert Mechanics</h3>
            </div>

            {/* Advantage 2 */}
            <div className="bg-red-600 p-8 rounded-lg text-center text-white">
              <div className="flex justify-center mb-4">
                <Wallet className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold">Reasonable Price</h3>
            </div>

            {/* Advantage 3 */}
            <div className="bg-red-600 p-8 rounded-lg text-center text-white">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold">Fast Work & Services</h3>
            </div>

            {/* Advantage 4 */}
            <div className="bg-red-600 p-8 rounded-lg text-center text-white">
              <div className="flex justify-center mb-4">
                <HandshakeIcon className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold">Trusted & Professional</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
