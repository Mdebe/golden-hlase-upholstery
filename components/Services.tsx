'use client';

import {
  Car,
  Sofa,
  Wrench,
  Building2,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    title: 'Seat Cover Specialists',
    icon: Car,
    image: '/images/coverr.jpeg',
    items: [
      'Custom Seat Covers',
      'Leather Seat Covers',
      'Luxury Car Interiors',
      'Seat Restoration',
    ],
  },
  {
    title: 'Upholstery Services',
    icon: Sofa,
    image: '/images/sofa.jpeg',
    items: [
      'Sofa Upholstery',
      'Dining Chairs',
      'Headboards',
      'Leather Upholstery',
    ],
  },
  {
    title: 'Furniture Repairs',
    icon: Wrench,
    image: '/images/cover.jpeg',
    items: [
      'Foam Replacement',
      'Frame Repairs',
      'Cushion Repairs',
      'Spring Replacement',
    ],
  },
  {
    title: 'Commercial Upholstery',
    icon: Building2,
    image: '/images/com.jpeg',
    items: [
      'Hotel Furniture',
      'Office Seating',
      'Restaurant Booths',
      'Waiting Rooms',
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative py-28 px-6
        bg-[#0A0A0A]
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D4AF37]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8B0D3A]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#D4AF37]/20 bg-black/30 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <p className="text-[#D4AF37] uppercase tracking-[5px] text-xs">
              Premium Craftsmanship
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white">
            Luxury Upholstery &{' '}
            <span className="text-[#D4AF37]">Seat Covers</span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            Premium seat covers, upholstery, and furniture restoration
            crafted with precision, luxury materials, and timeless style.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group relative
                bg-black/40
                backdrop-blur-md
                border border-[#D4AF37]/10
                rounded-[28px]
                overflow-hidden
                hover:-translate-y-3
                hover:border-[#D4AF37]/40
                transition-all duration-500
                shadow-xl shadow-black/30
              "
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Icon floating on image */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-[#D4AF37]/15 backdrop-blur-md flex items-center justify-center border border-[#D4AF37]/20">
                  <service.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-400 flex items-center gap-3 text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-[#D4AF37]/10 to-transparent" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="px-10 py-5 rounded-full bg-[#D4AF37] text-black font-semibold tracking-wide hover:scale-105 hover:bg-[#C9971C] transition duration-300 shadow-2xl shadow-[#D4AF37]/20">
            Request Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}