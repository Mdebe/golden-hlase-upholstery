'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import {
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const portfolio = [
  {
    image: '/images/portfolio1.jpg',
    title: 'Luxury Seat Covers',
    category: 'Vehicle Upholstery',
  },
  {
    image: '/images/portfolio2.jpg',
    title: 'Modern Sofa Restoration',
    category: 'Furniture Upholstery',
  },
  {
    image: '/images/portfolio3.jpg',
    title: 'Leather Interior Upgrade',
    category: 'Custom Interiors',
  },
  {
    image: '/images/portfolio4.jpg',
    title: 'Premium Lounge Suite',
    category: 'Luxury Furniture',
  },
  {
    image: '/images/portfolio5.jpg',
    title: 'Dining Chair Upholstery',
    category: 'Furniture Repairs',
  },
  {
    image: '/images/portfolio6.jpg',
    title: 'Custom Vehicle Interior',
    category: 'Seat Cover Specialists',
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#fafafa] min-h-screen overflow-hidden">

        {/* HERO SECTION */}
        <section
          className="
            relative
            pt-40 pb-24
            px-6
            overflow-hidden
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

          <div className="max-w-7xl mx-auto relative z-10 text-center">

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
                Luxury Portfolio
              </p>
            </div>

            {/* Heading */}
            <h1
              className="
                text-5xl
                md:text-7xl
                lg:text-8xl
                font-black
                leading-tight
              "
            >
              Our
              <span className="text-[#D4AF37]">
                {' '}Portfolio
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-3xl
                mx-auto
                text-lg
                text-gray-600
                leading-8
              "
            >
              Explore our luxury upholstery,
              premium seat covers, elegant
              furniture restoration, vehicle
              interiors, and custom craftsmanship
              projects completed with precision
              and timeless style.
            </p>
          </div>
        </section>

        {/* FEATURED IMAGE */}
        <section className="px-6 pb-16">

          <div className="max-w-7xl mx-auto">

            <div
              className="
                relative
                h-[500px]
                rounded-[40px]
                overflow-hidden
                shadow-2xl
              "
            >
              <img
                src="/images/hero.jpeg"
                alt="Luxury Upholstery"
                className="
                  w-full h-full
                  object-cover
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-black/70
                  via-black/40
                  to-transparent
                "
              />

              {/* Content */}
              <div
                className="
                  absolute inset-0
                  flex items-center
                  px-10 md:px-20
                "
              >
                <div className="max-w-2xl">

                  <p
                    className="
                      text-[#D4AF37]
                      uppercase
                      tracking-[5px]
                      text-sm
                      mb-5
                    "
                  >
                    Premium Craftsmanship
                  </p>

                  <h2
                    className="
                      text-4xl md:text-6xl
                      font-black
                      text-white
                      leading-tight
                    "
                  >
                    Luxury Upholstery
                    & Seat Covers
                  </h2>

                  <p
                    className="
                      mt-6
                      text-gray-300
                      text-lg
                      leading-8
                    "
                  >
                    We specialize in luxury seat
                    covers, sofa upholstery,
                    leather interiors, and elegant
                    furniture restoration.
                  </p>

                  <button
                    className="
                      mt-8
                      px-8 py-4
                      rounded-full
                      bg-[#D4AF37]
                      text-black
                      font-semibold
                      flex items-center gap-3
                      hover:scale-105
                      transition duration-300
                      shadow-xl shadow-[#D4AF37]/20
                    "
                  >
                    View More Projects

                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO GRID */}
        <section className="pb-28 px-6">

          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="mb-16 text-center">

              <p
                className="
                  text-[#D4AF37]
                  uppercase
                  tracking-[5px]
                  text-sm
                  mb-5
                "
              >
                Our Projects
              </p>

              <h2
                className="
                  text-4xl md:text-6xl
                  font-black
                "
              >
                Completed Work
              </h2>
            </div>

            {/* Grid */}
            <div
              className="
                grid
                md:grid-cols-2
                lg:grid-cols-3
                gap-8
              "
            >

              {portfolio.map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    bg-white
                    rounded-[35px]
                    overflow-hidden
                    shadow-xl
                    hover:-translate-y-3
                    transition-all duration-500
                  "
                >

                  {/* Image */}
                  <div className="relative overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full
                        h-[320px]
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
                        from-black/70
                        via-black/10
                        to-transparent
                      "
                    />

                    {/* Category */}
                    <div
                      className="
                        absolute top-5 left-5
                        px-4 py-2
                        rounded-full
                        bg-[#D4AF37]
                        text-black
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[2px]
                      "
                    >
                      {item.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">

                    <h3
                      className="
                        text-2xl
                        font-bold
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-gray-500
                        leading-7
                      "
                    >
                      Premium craftsmanship,
                      luxury materials, and
                      professional finishing
                      designed for elegance,
                      comfort, and durability.
                    </p>

                    <button
                      className="
                        mt-6
                        flex items-center gap-2
                        text-[#D4AF37]
                        font-semibold
                        hover:gap-4
                        transition-all duration-300
                      "
                    >
                      View Project

                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          className="
            py-24 px-6
            bg-[#111111]
            text-white
          "
        >
          <div className="max-w-5xl mx-auto text-center">

            <p
              className="
                text-[#D4AF37]
                uppercase
                tracking-[5px]
                text-sm
                mb-5
              "
            >
              Let’s Work Together
            </p>

            <h2
              className="
                text-4xl md:text-6xl
                font-black
                leading-tight
              "
            >
              Ready To Transform
              <span className="text-[#D4AF37]">
                {' '}Your Furniture?
              </span>
            </h2>

            <p
              className="
                mt-8
                text-gray-400
                text-lg
                leading-8
                max-w-3xl
                mx-auto
              "
            >
              Contact Golden H.N Hlase’s Upholstery
              for premium seat covers, luxury
              upholstery, custom interiors,
              and elegant furniture restoration.
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
                shadow-xl shadow-[#D4AF37]/20
              "
            >
              Request Free Quote
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}