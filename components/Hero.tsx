'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/hero-sofa.jpg"
        alt="Luxury Sofa"
        className="
          absolute inset-0
          w-full h-full
          object-cover
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          relative z-10
          text-center
          max-w-5xl
          px-6
        "
      >
        <p
          className="
            text-gold uppercase
            tracking-[5px]
            mb-6
          "
        >
          Luxury Upholstery Since 2005
        </p>

        <h1
          className="
            text-5xl md:text-7xl
            font-heading
            font-bold
            leading-tight
          "
        >
          Premium Upholstery &
          <span className="text-gold">
            {' '}Furniture Restoration
          </span>
        </h1>

        <p
          className="
            mt-8 text-lg md:text-2xl
            text-gray-300
          "
        >
          We restore, redesign, and create luxury
          furniture with timeless craftsmanship.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">
          <button
            className="
              px-8 py-4 rounded-full
              bg-gold text-black
              font-semibold
              hover:scale-105 transition
            "
          >
            Get Quote
          </button>

          <button
            className="
              px-8 py-4 rounded-full
              border border-gold
              hover:bg-gold hover:text-black
              transition
            "
          >
            View Portfolio
          </button>
        </div>
      </motion.div>
    </section>
  );
}