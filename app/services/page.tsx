'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import {
  Car,
  Sofa,
  Wrench,
  Building2,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    title: 'Luxury Seat Covers',
    icon: Car,
    image: '/images/service-seat.jpg',
    description:
      'Premium custom seat covers designed for comfort, durability, and luxury vehicle interiors.',
  },
  {
    title: 'Modern Upholstery',
    icon: Sofa,
    image: '/images/service-sofa.jpg',
    description:
      'Luxury sofa upholstery, dining chairs, headboards, and elegant furniture restoration.',
  },
  {
    title: 'Furniture Repairs',
    icon: Wrench,
    image: '/images/service-repair.jpg',
    description:
      'Professional foam replacement, cushion repairs, stitching, and frame restoration.',
  },
  {
    title: 'Commercial Upholstery',
    icon: Building2,
    image: '/images/service-commercial.jpg',
    description:
      'Office seating, hotel furniture, restaurant booths, and waiting room upholstery.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <main className="bg-white text-black min-h-screen overflow-hidden">

        {/* HERO */}
        <section
          className="
            pt-40 pb-24 px-6
            text-center
            relative overflow-hidden
          "
        >
          {/* Background Glow */}
          <div
            className="
              absolute top-0 left-1/2
              -translate-x-1/2
              w-[700px] h-[700px]
              bg-[#D4AF37]/10
              blur-3xl
              rounded-full
            "
          />

          <div className="max-w-5xl mx-auto relative z-10">

            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-3
                px-5 py-3
                rounded-full
                border border-[#D4AF37]/20
                bg-[#D4AF37]/5
                mb-8
              "
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />

              <p
                className="
                  uppercase tracking-[5px]
                  text-xs
                  text-[#D4AF37]
                "
              >
                Our Services
              </p>
            </div>

            {/* Heading */}
            <h1
              className="
                text-5xl md:text-7xl
                font-black
                leading-tight
              "
            >
              Premium Upholstery &
              <span className="text-[#D4AF37]">
                {' '}Seat Covers
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-8
                text-lg
                text-gray-600
                leading-8
                max-w-3xl mx-auto
              "
            >
              Luxury upholstery services crafted with
              precision, elegance, and premium quality
              materials for vehicles, homes, offices,
              and commercial interiors.
            </p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="pb-28 px-6">
          <div
            className="
              max-w-7xl mx-auto
              grid md:grid-cols-2 lg:grid-cols-4
              gap-8
            "
          >

            {services.map((service, index) => (
              <div
                key={index}
                className="
                  group
                  overflow-hidden
                  rounded-[32px]
                  border border-gray-200
                  bg-white
                  shadow-xl
                  hover:-translate-y-3
                  transition duration-500
                "
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      w-full h-full
                      object-cover
                      group-hover:scale-110
                      transition duration-700
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/50
                      via-black/10
                      to-transparent
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-7">

                  {/* Icon */}
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-[#D4AF37]/10
                      flex items-center justify-center
                      mb-5

                      group-hover:bg-[#D4AF37]
                      transition duration-300
                    "
                  >
                    <service.icon
                      className="
                        text-[#D4AF37]
                        group-hover:text-black
                        transition duration-300
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-2xl
                      font-bold
                      mb-4
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-gray-500
                      leading-8
                    "
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          className="
            px-6 pb-28
          "
        >
          <div
            className="
              max-w-7xl mx-auto
              rounded-[40px]
              bg-[#111111]
              overflow-hidden
              relative
              px-10 md:px-20
              py-20
              text-center
            "
          >
            {/* Glow */}
            <div
              className="
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[500px] h-[500px]
                bg-[#D4AF37]/10
                blur-3xl
                rounded-full
              "
            />

            <div className="relative z-10">
              <h2
                className="
                  text-4xl md:text-6xl
                  font-black
                  text-white
                  leading-tight
                "
              >
                Transform Your
                <span className="text-[#D4AF37]">
                  {' '}Interior
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-3xl mx-auto
                  text-lg
                  text-gray-300
                  leading-8
                "
              >
                Get premium upholstery and luxury seat
                cover solutions tailored to your style,
                comfort, and durability needs.
              </p>

              <button
                className="
                  mt-10
                  px-10 py-5
                  rounded-full
                  bg-[#D4AF37]
                  text-black
                  font-semibold
                  hover:scale-105
                  hover:bg-[#C9971C]
                  transition duration-300
                  shadow-2xl shadow-[#D4AF37]/20
                "
              >
                Request Free Quote
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}