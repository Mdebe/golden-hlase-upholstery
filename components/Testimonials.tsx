'use client';

import {
  Star,
  Quote,
} from 'lucide-react';

const testimonials = [
  {
    name: 'Customer Review',
    role: 'Luxury Upholstery Client',
    image: '/images/client1.jpg',
    review:
      'Our old couches now look brand new. Excellent workmanship, premium quality materials, and professional service from start to finish.',
  },
  {
    name: 'Happy Client',
    role: 'Seat Cover Customer',
    image: '/images/client2.jpg',
    review:
      'Beautiful quality and amazing attention to detail. The custom seat covers completely transformed my vehicle interior.',
  },
  {
    name: 'Satisfied Customer',
    role: 'Furniture Restoration',
    image: '/images/client3.jpg',
    review:
      'Professional craftsmanship and excellent communication. Highly recommended for upholstery and furniture restoration.',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        py-28
        px-6
        bg-[#0f0f0f]
        relative
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

      <div className="max-w-7xl mx-auto relative z-10">

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
            Client Testimonials
          </p>

          <h2
            className="
              text-4xl md:text-6xl
              font-black
              text-white
              leading-tight
            "
          >
            What Our
            <span className="text-[#D4AF37]">
              {' '}Clients Say
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-gray-400
              text-lg
              leading-8
            "
          >
            Trusted upholstery specialists delivering
            premium seat covers, furniture restoration,
            and luxury craftsmanship across South Africa.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-[35px]
                p-8
                hover:-translate-y-3
                hover:border-[#D4AF37]/40
                transition-all
                duration-500
                overflow-hidden
              "
            >
              {/* Gold Hover Glow */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-[#D4AF37]/0
                  via-[#D4AF37]/0
                  to-[#D4AF37]/10
                  opacity-0
                  group-hover:opacity-100
                  transition duration-500
                "
              />

              {/* Quote Icon */}
              <div
                className="
                  w-16 h-16
                  rounded-2xl
                  bg-[#D4AF37]/10
                  flex items-center justify-center
                  mb-8
                "
              >
                <Quote
                  className="
                    text-[#D4AF37]
                    w-8 h-8
                  "
                />
              </div>

              {/* Review */}
              <p
                className="
                  text-gray-300
                  leading-8
                  text-lg
                  relative z-10
                "
              >
                
              </p>

              {/* Stars */}
              <div className="flex gap-1 mt-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="
                      w-5 h-5
                      fill-[#D4AF37]
                      text-[#D4AF37]
                    "
                  />
                ))}
              </div>

              {/* User Info */}
              <div
                className="
                  mt-8
                  flex items-center gap-4
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-16 h-16
                    rounded-full
                    object-cover
                    border-2 border-[#D4AF37]/30
                  "
                />

                <div>
                  <h3
                    className="
                      text-white
                      font-semibold
                      text-lg
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                      text-[#D4AF37]
                      text-sm
                      mt-1
                    "
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}