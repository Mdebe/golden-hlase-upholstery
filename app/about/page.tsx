'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { motion } from 'framer-motion';

import {
  Award,
  Car,
  Sofa,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';

const values = [
  {
    title: 'Premium Craftsmanship',
    description:
      'We deliver high-quality upholstery and restoration services using premium materials and expert craftsmanship.',
    icon: Award,
  },
  {
    title: 'Luxury Seat Covers',
    description:
      'Custom-made seat covers and vehicle interiors designed for comfort, elegance, and durability.',
    icon: Car,
  },
  {
    title: 'Furniture Restoration',
    description:
      'We transform worn furniture into elegant modern masterpieces with timeless finishing.',
    icon: Sofa,
  },
  {
    title: 'Reliable Repairs',
    description:
      'Professional repairs including foam replacement, stitching, frame repairs, and cushion restoration.',
    icon: Wrench,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative pt-44 pb-32 px-6 overflow-hidden">

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

          <div
            className="
              max-w-7xl mx-auto
              relative z-10
              grid lg:grid-cols-2
              gap-20
              items-center
            "
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
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
                  About Our Company
                </p>
              </div>

              {/* Heading */}
              <h1
                className="
                  text-5xl md:text-6xl lg:text-7xl
                  font-black
                  leading-tight
                "
              >
                Luxury Upholstery &
                <span className="text-[#D4AF37]">
                  {' '}Seat Cover Experts
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-8
                  text-lg
                  text-gray-600
                  leading-8
                "
              >
                Golden H.N Hlase’s Upholstery is a premium
                upholstery and furniture restoration company
                specializing in luxury seat covers, custom
                interiors, sofa upholstery, and professional
                furniture craftsmanship.
              </p>

              <p
                className="
                  mt-6
                  text-gray-500
                  leading-8
                "
              >
                Since 2005, we have proudly transformed
                vehicles, homes, offices, and commercial
                furniture with elegant upholstery solutions
                designed for comfort, durability, and
                timeless style.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-5">

                <Link href="/contact">
                  <button
                    className="
                      px-8 py-4
                      rounded-full
                      bg-[#D4AF37]
                      text-black
                      font-semibold
                      hover:scale-105
                      transition duration-300
                      shadow-xl shadow-[#D4AF37]/20
                    "
                  >
                    Get Free Quote
                  </button>
                </Link>

                <Link href="/portfolio">
                  <button
                    className="
                      px-8 py-4
                      rounded-full
                      border border-[#D4AF37]
                      text-[#D4AF37]
                      hover:bg-[#D4AF37]
                      hover:text-black
                      transition duration-300
                    "
                  >
                    View Portfolio
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/seat.jpeg"
                alt="Luxury Upholstery"
                className="
                  w-full
                  h-[650px]
                  object-cover
                  rounded-[40px]
                  shadow-2xl
                "
              />

              {/* Floating Card */}
              <div
                className="
                  absolute -bottom-8 left-8
                  bg-white
                  border border-[#D4AF37]/20
                  rounded-3xl
                  p-6
                  shadow-2xl
                  max-w-[260px]
                "
              >
                <div className="flex items-center gap-4">

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-[#D4AF37]/10
                      flex items-center justify-center
                    "
                  >
                    <ShieldCheck className="text-[#D4AF37]" />
                  </div>

                  <div>
                    <h3
                      className="
                        text-3xl
                        font-bold
                        text-[#D4AF37]
                      "
                    >
                      20+
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* COMPANY STORY */}
        <section className="py-28 px-6 bg-[#fafafa]">

          <div className="max-w-6xl mx-auto text-center">

            <p
              className="
                text-[#D4AF37]
                uppercase
                tracking-[5px]
                text-sm
                mb-5
              "
            >
              Our Story
            </p>

            <h2
              className="
                text-4xl md:text-6xl
                font-black
                leading-tight
              "
            >
              Craftsmanship You Can Trust
            </h2>

            <p
              className="
                mt-10
                text-gray-600
                text-lg
                leading-9
                max-w-4xl
                mx-auto
              "
            >
              Golden H.N Hlase’s Upholstery was founded
              with a passion for restoring comfort,
              elegance, and luxury through professional
              upholstery services.
            </p>

            <p
              className="
                mt-6
                text-gray-500
                leading-9
                max-w-4xl
                mx-auto
              "
            >
              Over the years, we have become trusted
              specialists in seat covers, furniture
              restoration, leather upholstery, foam
              replacement, and custom interior
              craftsmanship.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-28 px-6 bg-white">

          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="text-center mb-20">

              <p
                className="
                  text-[#D4AF37]
                  uppercase
                  tracking-[5px]
                  text-sm
                  mb-5
                "
              >
                What We Do
              </p>

              <h2
                className="
                  text-4xl md:text-6xl
                  font-black
                "
              >
                Premium Upholstery Services
              </h2>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    bg-white
                    border border-gray-200
                    rounded-[30px]
                    p-8
                    hover:-translate-y-3
                    hover:border-[#D4AF37]/40
                    transition-all duration-500
                    shadow-xl
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-[#D4AF37]/10
                      flex items-center justify-center
                      mb-6

                      group-hover:bg-[#D4AF37]
                      transition duration-500
                    "
                  >
                    <value.icon
                      className="
                        w-8 h-8
                        text-[#D4AF37]

                        group-hover:text-black
                        transition duration-500
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      mb-4
                    "
                  >
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-gray-500
                      leading-8
                    "
                  >
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section
          className="
            py-24 px-6
            bg-[#111111]
            text-white
          "
        >
          <div
            className="
              max-w-6xl mx-auto
              grid md:grid-cols-4
              gap-8
              text-center
            "
          >
            <div>
              <h3
                className="
                  text-5xl
                  font-bold
                  text-[#D4AF37]
                "
              >
                20+
              </h3>

              <p className="mt-3 text-gray-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3
                className="
                  text-5xl
                  font-bold
                  text-[#D4AF37]
                "
              >
                500+
              </h3>

              <p className="mt-3 text-gray-400">
                Completed Projects
              </p>
            </div>

            <div>
              <h3
                className="
                  text-5xl
                  font-bold
                  text-[#D4AF37]
                "
              >
                100%
              </h3>

              <p className="mt-3 text-gray-400">
                Customer Satisfaction
              </p>
            </div>

            <div>
              <h3
                className="
                  text-5xl
                  font-bold
                  text-[#D4AF37]
                "
              >
                Premium
              </h3>

              <p className="mt-3 text-gray-400">
                Quality Materials
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}