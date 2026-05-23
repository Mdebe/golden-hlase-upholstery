'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Car,
  Sofa,
  Wrench,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import { useEffect, useState } from 'react';

const heroImages = [
  '/images/seat-cover-12.jpeg',
  '/images/hero.jpeg',
  '/images/seat-cover-3.jpg',
  '/images/seat-cover-4.jpg',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === heroImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="
        relative min-h-screen
        flex items-center
        overflow-hidden
        bg-black
      "
    >
      {/* Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={heroImages[current]}
            alt="Luxury Seat Covers"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="
              absolute inset-0
              w-full h-full
              object-cover
            "
          />
        </AnimatePresence>
      </div>

      {/* Luxury Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/55
          via-black/35
          to-black/20
        "
      />

      {/* Bottom Fade */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/60
          via-transparent
          to-transparent
        "
      />

      {/* Gold Glow */}
      <div
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px]
          bg-[#D4AF37]/15
          blur-3xl
          rounded-full
        "
      />

      {/* Slider Buttons */}
      <button
        onClick={prevSlide}
        className="
          absolute left-5 md:left-8
          top-1/2 -translate-y-1/2
          z-20
          w-12 h-12 md:w-14 md:h-14
          rounded-full
          bg-black/30
          backdrop-blur-md
          border border-[#D4AF37]/20
          flex items-center justify-center
          text-white
          hover:bg-[#D4AF37]
          hover:text-black
          transition duration-300
        "
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="
          absolute right-5 md:right-8
          top-1/2 -translate-y-1/2
          z-20
          w-12 h-12 md:w-14 md:h-14
          rounded-full
          bg-black/30
          backdrop-blur-md
          border border-[#D4AF37]/20
          flex items-center justify-center
          text-white
          hover:bg-[#D4AF37]
          hover:text-black
          transition duration-300
        "
      >
        <ChevronRight />
      </button>

      {/* Main Content */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6 lg:px-8
          w-full
          pt-36 pb-24
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          {/* Top Badge */}
          <div
            className="
              inline-flex items-center gap-3
              px-5 py-3
              rounded-full
              border border-[#D4AF37]/20
              bg-black/20
              backdrop-blur-md
              mb-8
            "
          >
            <Star
              className="
                w-4 h-4
                text-[#D4AF37]
              "
            />

            <p
              className="
                text-[#D4AF37]
                uppercase
                tracking-[4px]
                text-[10px] md:text-sm
              "
            >
              Premium Seat Covers Since 2005
            </p>
          </div>

          {/* Heading */}
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-[90px]
              font-heading
              font-bold
              leading-[1]
              text-white
            "
          >
            Luxury
            <span className="text-[#D4AF37]">
              {' '}Seat Covers
            </span>

            <span className="block mt-3">
              & Upholstery
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-8
              text-base
              sm:text-lg
              md:text-xl
              text-gray-200
              leading-8
              max-w-2xl
            "
          >
            We specialize in custom seat covers,
            luxury vehicle interiors, sofa upholstery,
            furniture restoration, and premium
            craftsmanship designed for comfort,
            elegance, and durability.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button
              className="
                px-8 md:px-10
                py-4 md:py-5
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
              Get Free Quote
            </button>

            <button
              className="
                px-8 md:px-10
                py-4 md:py-5
                rounded-full
                border border-[#D4AF37]
                text-white
                hover:bg-[#D4AF37]
                hover:text-black
                transition duration-300
              "
            >
              View Portfolio
            </button>
          </div>

          {/* Service Cards */}
          <div
            className="
              mt-16
              grid grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
            "
          >
            {/* Card 1 */}
            <div
              className="
                bg-black/20
                backdrop-blur-md
                border border-[#D4AF37]/10
                rounded-3xl
                p-6
                hover:border-[#D4AF37]/40
                hover:bg-black/30
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

              <h3 className="text-white font-semibold text-lg">
                Seat Covers
              </h3>

              <p className="text-gray-300 text-sm mt-2">
                Custom leather and luxury seat covers.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
                bg-black/20
                backdrop-blur-md
                border border-[#D4AF37]/10
                rounded-3xl
                p-6
                hover:border-[#D4AF37]/40
                hover:bg-black/30
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

              <h3 className="text-white font-semibold text-lg">
                Upholstery
              </h3>

              <p className="text-gray-300 text-sm mt-2">
                Elegant sofa and furniture restoration.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
                bg-black/20
                backdrop-blur-md
                border border-[#D4AF37]/10
                rounded-3xl
                p-6
                hover:border-[#D4AF37]/40
                hover:bg-black/30
                transition duration-300
              "
            >
              <Wrench
                className="
                  w-10 h-10
                  text-[#D4AF37]
                  mb-4
                "
              />

              <h3 className="text-white font-semibold text-lg">
                Repairs
              </h3>

              <p className="text-gray-300 text-sm mt-2">
                Cushion, foam, and stitching repairs.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="
                bg-black/20
                backdrop-blur-md
                border border-[#D4AF37]/10
                rounded-3xl
                p-6
                hover:border-[#D4AF37]/40
                hover:bg-black/30
                transition duration-300
              "
            >
              <Star
                className="
                  w-10 h-10
                  text-[#D4AF37]
                  mb-4
                "
              />

              <h3 className="text-white font-semibold text-lg">
                Premium Quality
              </h3>

              <p className="text-gray-300 text-sm mt-2">
                Expert craftsmanship trusted since 2005.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slider Dots */}
      <div
        className="
          absolute bottom-8 left-1/2
          -translate-x-1/2
          flex gap-3 z-20
        "
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              h-3 rounded-full transition-all duration-300
              ${
                current === index
                  ? 'w-10 bg-[#D4AF37]'
                  : 'w-3 bg-white/40'
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}