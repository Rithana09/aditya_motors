import { useEffect, useRef, useState } from 'react';
import { Wrench, Wallet, Clock, HandshakeIcon } from 'lucide-react';

export default function Advantages() {
  const [isVisible, setIsVisible] = useState(false);

  // Refs for the sections we want to observe
  const sectionRef = useRef(null);
  const advantageRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null, // relative to viewport
      rootMargin: '0px',
      threshold: 0.1, // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Adding the animation effect to the advantages when visible
  const slideUpClass = isVisible ? 'opacity-100 transform translate-y-0 transition-all duration-700' : 'opacity-0 transform translate-y-12';

  return (
    <section className="container mx-auto px-4 py-16" ref={sectionRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side with image and experience badge */}
        <div
          className={`relative ${slideUpClass}`}
          ref={(el) => (advantageRefs.current[0] = el)}
        >
          <img
            src="/motor2.avif"
            alt="Mechanic working in garage"
            className="rounded-lg w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-zinc-900 p-2 sm:p-4 max-w-[140px] sm:max-w-[200px]">
  <p className="text-red-600 font-medium text-xs sm:text-sm tracking-wider">EXPERIENCED SINCE</p>
  <p className="text-white text-3xl sm:text-6xl font-bold">2005</p>
</div>

        </div>

        {/* Right side with advantages */}
        <div className="space-y-8">
          <div
            className={`text-red-600 font-medium tracking-wider mb-2 ${slideUpClass}`}
            ref={(el) => (advantageRefs.current[1] = el)}
          >
            OUR ADVANTAGES
          </div>

          <div
            className={`text-5xl font-bold text-zinc-900 ${slideUpClass}`}
            ref={(el) => (advantageRefs.current[2] = el)}
          >
            WHY CHOOSE US
          </div>

          <div
            className={`text-zinc-600 ${slideUpClass}`}
            ref={(el) => (advantageRefs.current[3] = el)}
          >
            We also provide servicing for electric bikes, ensuring they perform to their full potential. A thorough inspection of your bike to ensure every part is functioning properly.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Advantage 1 */}
            <div
              className={`bg-red-600 p-8 rounded-lg text-center text-white ${slideUpClass}`}
              ref={(el) => (advantageRefs.current[4] = el)}
            >
              <div className="flex justify-center mb-4">
                <Wrench className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold">Expert Mechanics</h3>
            </div>

            {/* Advantage 2 */}
            <div
              className={`bg-red-600 p-8 rounded-lg text-center text-white ${slideUpClass}`}
              ref={(el) => (advantageRefs.current[5] = el)}
            >
              <div className="flex justify-center mb-4">
                <Wallet className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold">Reasonable Price</h3>
            </div>

            {/* Advantage 3 */}
            <div
              className={`bg-red-600 p-8 rounded-lg text-center text-white ${slideUpClass}`}
              ref={(el) => (advantageRefs.current[6] = el)}
            >
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold">Fast Work & Services</h3>
            </div>

            {/* Advantage 4 */}
            <div
              className={`bg-red-600 p-8 rounded-lg text-center text-white ${slideUpClass}`}
              ref={(el) => (advantageRefs.current[7] = el)}
            >
              <div className="flex justify-center mb-4">
                <HandshakeIcon className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold">Trusted & Professional</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
