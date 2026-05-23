'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-dark px-6"
    >
      <div
        className="
          max-w-7xl mx-auto
          grid lg:grid-cols-2 gap-16
          items-center
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/about.jpg"
            alt="About Upholstery"
            className="
              rounded-3xl
              shadow-2xl
            "
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold uppercase tracking-[4px] mb-4">
            About Us
          </p>

          <h2
            className="
              text-4xl md:text-5xl
              font-heading
              font-bold
              mb-8
            "
          >
            Craftsmanship You Can Trust
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            Golden H.N Hlase’s Upholstery has proudly
            delivered premium upholstery and furniture
            restoration services since 2005.
            We specialize in transforming old furniture
            into elegant masterpieces using quality fabrics,
            expert stitching, and timeless craftsmanship.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="luxury-card p-6 rounded-3xl">
              <h3 className="text-3xl font-bold text-gold">
                20+
              </h3>
              <p className="text-gray-400">
                Years Experience
              </p>
            </div>

            <div className="luxury-card p-6 rounded-3xl">
              <h3 className="text-3xl font-bold text-gold">
                500+
              </h3>
              <p className="text-gray-400">
                Projects Completed
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}