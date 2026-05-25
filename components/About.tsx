'use client';

import { motion } from 'framer-motion';
import {
  Car,
  Sofa,
  ShieldCheck,
  Award,
} from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        py-28
        bg-[#0A0A0A]
        overflow-hidden
        px-6
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute top-0 right-0
          w-[500px] h-[500px]
          bg-[#D4AF37]/10
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          grid lg:grid-cols-2
          gap-20
          items-center
        "
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Image */}
          <img
            src="/images/about.jpeg"
            alt="Luxury Upholstery"
            className="
              rounded-[35px]
              shadow-2xl
              object-cover
              w-full
              h-[650px]
            "
          />

          {/* Floating Card */}
          <div
            className="
              absolute -bottom-8 left-6
              bg-black/70
              backdrop-blur-xl
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
                <Award className="text-[#D4AF37]" />
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

                <p className="text-gray-300 text-sm">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {/* Section Label */}
          <p
            className="
              text-[#D4AF37]
              uppercase
              tracking-[5px]
              mb-5
              text-sm
            "
          >
            About Our Company
          </p>

          {/* Heading */}
          <h2
            className="
              text-4xl md:text-5xl lg:text-6xl
              font-heading
              font-bold
              text-white
              leading-tight
            "
          >
            Luxury Upholstery &
            <span className="text-[#D4AF37]">
              {' '}Seat Cover Experts
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-8
              text-gray-300
              leading-9
              text-lg
            "
          >
            Golden H.N Hlase’s Upholstery has proudly
            delivered premium upholstery, luxury seat
            covers, and furniture restoration services
            since 2005.
          </p>

          <p
            className="
              mt-6
              text-gray-400
              leading-8
            "
          >
            We specialize in transforming vehicle
            interiors, sofas, couches, dining chairs,
            and furniture into elegant masterpieces
            using premium materials, expert stitching,
            and timeless craftsmanship.
          </p>

          {/* Services Highlights */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {/* Card */}
            <div
              className="
                bg-[#111111]
                border border-[#D4AF37]/10
                rounded-3xl
                p-6
                hover:border-[#D4AF37]/40
                transition duration-300
              "
            >
              <Car
                className="
                  w-10 h-10
                  text-[#D4AF37]
                  mb-4
                "
              />

              <h3 className="text-xl font-semibold text-white">
                Premium Seat Covers
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                Custom luxury seat covers and
                professional vehicle upholstery.
              </p>
            </div>

            {/* Card */}
            <div
              className="
                bg-[#111111]
                border border-[#D4AF37]/10
                rounded-3xl
                p-6
                hover:border-[#D4AF37]/40
                transition duration-300
              "
            >
              <Sofa
                className="
                  w-10 h-10
                  text-[#D4AF37]
                  mb-4
                "
              />

              <h3 className="text-xl font-semibold text-white">
                Furniture Restoration
              </h3>

              <p className="text-gray-400 mt-3 leading-7">
                Elegant sofa restoration and
                premium upholstery craftsmanship.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div
              className="
                bg-black/40
                backdrop-blur-md
                border border-[#D4AF37]/10
                rounded-3xl
                p-7
              "
            >
              <h3
                className="
                  text-4xl
                  font-bold
                  text-[#D4AF37]
                "
              >
                500+
              </h3>

              <p className="text-gray-400 mt-2">
                Projects Completed
              </p>
            </div>

            {/* Stat 2 */}
            <div
              className="
                bg-black/40
                backdrop-blur-md
                border border-[#D4AF37]/10
                rounded-3xl
                p-7
              "
            >
              <div className="flex items-center gap-3">
                <ShieldCheck
                  className="
                    text-[#D4AF37]
                    w-8 h-8
                  "
                />

                <div>
                  <h3
                    className="
                      text-4xl
                      font-bold
                      text-[#D4AF37]
                    "
                  >
                    100%
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Quality Craftsmanship
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <button
              className="
                px-10 py-5
                rounded-full
                bg-[#D4AF37]
                text-black
                font-semibold
                tracking-wide
                hover:scale-105
                hover:bg-[#C9971C]
                transition duration-300
                shadow-2xl shadow-[#D4AF37]/20
              "
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}