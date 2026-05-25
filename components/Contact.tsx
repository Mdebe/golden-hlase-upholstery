'use client';

import { useState } from 'react';

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Golden H.N Hlase Upholstery,

My Name: ${form.name}
Email: ${form.email}

Project Details:
${form.message}
    `;

    const whatsappUrl = `https://wa.me/27613105030?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="contact"
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
            Contact Us
          </p>

          <h2
            className="
              text-4xl md:text-6xl
              font-black
              text-white
              leading-tight
            "
          >
            Request A
            <span className="text-[#D4AF37]">
              {' '}Free Quote
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-lg
              text-gray-400
              leading-8
            "
          >
            Contact us for luxury upholstery,
            premium seat covers, vehicle interiors,
            and furniture restoration services.
          </p>
        </div>

        {/* Content */}
        <div
          className="
            grid lg:grid-cols-2
            gap-10
            items-start
          "
        >

          {/* Contact Form */}
          <div
            className="
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              rounded-[35px]
              p-8 md:p-10
            "
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}
              <input
                type="text"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="
                  w-full
                  p-5
                  rounded-2xl
                  bg-black/30
                  border border-white/10
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  focus:border-[#D4AF37]
                  transition
                "
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="
                  w-full
                  p-5
                  rounded-2xl
                  bg-black/30
                  border border-white/10
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  focus:border-[#D4AF37]
                  transition
                "
              />

              {/* Message */}
              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                required
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="
                  w-full
                  p-5
                  rounded-2xl
                  bg-black/30
                  border border-white/10
                  text-white
                  placeholder:text-gray-500
                  outline-none
                  resize-none
                  focus:border-[#D4AF37]
                  transition
                "
              />

              {/* Button */}
              <button
                type="submit"
                className="
                  group
                  w-full
                  py-5
                  rounded-full
                  bg-[#D4AF37]
                  text-black
                  font-semibold
                  flex items-center
                  justify-center
                  gap-3
                  hover:scale-[1.02]
                  hover:bg-[#c89b2c]
                  transition duration-300
                  shadow-2xl shadow-[#D4AF37]/20
                "
              >
                Send via WhatsApp

                <ArrowUpRight
                  className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition
                  "
                />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className="
              bg-gradient-to-br
              from-[#1a1a1a]
              to-[#111111]
              border border-white/10
              rounded-[35px]
              p-8 md:p-10
              text-white
              relative
              overflow-hidden
            "
          >
            {/* Gold Glow */}
            <div
              className="
                absolute top-0 right-0
                w-[300px] h-[300px]
                bg-[#D4AF37]/10
                blur-3xl
                rounded-full
              "
            />

            <div className="relative z-10">

              <p
                className="
                  text-[#D4AF37]
                  uppercase
                  tracking-[5px]
                  text-sm
                  mb-4
                "
              >
                Contact Information
              </p>

              <h3
                className="
                  text-3xl md:text-4xl
                  font-black
                  leading-tight
                "
              >
                Let’s Build Something
                <span className="text-[#D4AF37]">
                  {' '}Luxury
                </span>
              </h3>

              <div className="mt-10 space-y-8">

                {/* Phone */}
                <div className="flex gap-5">

                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-[#D4AF37]/10
                      flex items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Phone className="text-[#D4AF37]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">
                      Phone Number
                    </h4>

                    <p className="text-gray-400 mt-2">
                      061 310 5030
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5">

                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-[#D4AF37]/10
                      flex items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Mail className="text-[#D4AF37]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">
                      Email Address
                    </h4>

                    <p className="text-gray-400 mt-2">
                      info@goldenhnhlase.co.za
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-5">

                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-[#D4AF37]/10
                      flex items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <MapPin className="text-[#D4AF37]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">
                      Address
                    </h4>

                    <p className="text-gray-400 mt-2 leading-7">
                      8 Jacaranda, Arboretum,
                      Richards Bay, 3900
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-5">

                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-[#D4AF37]/10
                      flex items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Clock className="text-[#D4AF37]" />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">
                      Working Hours
                    </h4>

                    <p className="text-gray-400 mt-2">
                      Monday - Saturday
                    </p>

                    <p className="text-gray-500 text-sm">
                      8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}