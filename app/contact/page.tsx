'use client';

import { useState } from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const whatsappNumber = '27613105030';

    const text = `
*New Upholstery Quote Request*

👤 Full Name: ${form.name}

📧 Email: ${form.email}

📱 Phone: ${form.phone}

🛠 Service: ${form.service}

📝 Message:
${form.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen overflow-hidden">

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

          <div className="max-w-7xl mx-auto relative z-10">

            {/* Header */}
            <div className="text-center">

              <p
                className="
                  text-[#D4AF37]
                  uppercase
                  tracking-[5px]
                  text-sm
                  mb-5
                "
              >
                Contact Golden Upholstery
              </p>

              <h1
                className="
                  text-5xl
                  md:text-7xl
                  lg:text-8xl
                  font-black
                  leading-tight
                "
              >
                Contact
                <span className="text-[#D4AF37]">
                  {' '}Us
                </span>
              </h1>

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
                Get in touch for premium upholstery,
                luxury seat covers, vehicle interiors,
                furniture restoration, and professional
                custom upholstery services.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="pb-28 px-6">

          <div
            className="
              max-w-7xl mx-auto
              grid lg:grid-cols-2
              gap-16
              items-start
            "
          >

            {/* LEFT SIDE */}
            <div>

              {/* Form Card */}
              <div
                className="
                  bg-[#fafafa]
                  border border-[#D4AF37]/10
                  p-8 md:p-10
                  rounded-[40px]
                  shadow-2xl
                "
              >

                <div className="mb-10">

                  <p
                    className="
                      text-[#D4AF37]
                      uppercase
                      tracking-[4px]
                      text-xs
                      mb-4
                    "
                  >
                    Request A Quote
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold">
                    Let’s Discuss
                    <span className="text-[#D4AF37]">
                      {' '}Your Project
                    </span>
                  </h2>
                </div>

                <form
                  onSubmit={sendWhatsApp}
                  className="space-y-6"
                >

                  {/* Name */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="
                      w-full
                      px-6 py-5
                      rounded-2xl
                      border border-gray-200
                      bg-white
                      outline-none
                      text-black
                      placeholder:text-gray-400
                      focus:border-[#D4AF37]
                      transition
                    "
                  />

                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="
                      w-full
                      px-6 py-5
                      rounded-2xl
                      border border-gray-200
                      bg-white
                      outline-none
                      text-black
                      placeholder:text-gray-400
                      focus:border-[#D4AF37]
                      transition
                    "
                  />

                  {/* Phone */}
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="
                      w-full
                      px-6 py-5
                      rounded-2xl
                      border border-gray-200
                      bg-white
                      outline-none
                      text-black
                      placeholder:text-gray-400
                      focus:border-[#D4AF37]
                      transition
                    "
                  />

                  {/* Service */}
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="
                      w-full
                      px-6 py-5
                      rounded-2xl
                      border border-gray-200
                      bg-white
                      outline-none
                      text-gray-600
                      focus:border-[#D4AF37]
                      transition
                    "
                  >
                    <option value="">
                      Select Service
                    </option>

                    <option>
                      Seat Covers
                    </option>

                    <option>
                      Luxury Upholstery
                    </option>

                    <option>
                      Furniture Repairs
                    </option>

                    <option>
                      Commercial Upholstery
                    </option>

                    <option>
                      Custom Furniture
                    </option>
                  </select>

                  {/* Message */}
                  <textarea
                    rows={6}
                    name="message"
                    placeholder="Tell us about your project..."
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="
                      w-full
                      px-6 py-5
                      rounded-2xl
                      border border-gray-200
                      bg-white
                      outline-none
                      text-black
                      placeholder:text-gray-400
                      focus:border-[#D4AF37]
                      transition
                      resize-none
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
                      hover:bg-[#C9971C]
                      transition duration-300
                      shadow-xl shadow-[#D4AF37]/20
                    "
                  >
                    Send via WhatsApp

                    <ArrowRight
                      className="
                        group-hover:translate-x-1
                        transition
                      "
                    />
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-8">

              {/* Info Card */}
              <div
                className="
                  bg-[#111111]
                  text-white
                  rounded-[40px]
                  p-10
                  relative
                  overflow-hidden
                "
              >
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
                      tracking-[4px]
                      text-xs
                      mb-4
                    "
                  >
                    Contact Information
                  </p>

                  <h2 className="text-4xl font-bold leading-tight">
                    Premium Upholstery
                    <span className="text-[#D4AF37]">
                      {' '}Experts
                    </span>
                  </h2>

                  <div className="mt-10 space-y-8">

                    {/* Phone */}
                    <div className="flex gap-5">
                      <div
                        className="
                          w-16 h-16
                          rounded-2xl
                          bg-[#D4AF37]/10
                          flex items-center justify-center
                          shrink-0
                        "
                      >
                        <Phone className="text-[#D4AF37]" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">
                          Phone Number
                        </h3>

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
                          flex items-center justify-center
                          shrink-0
                        "
                      >
                        <Mail className="text-[#D4AF37]" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">
                          Email Address
                        </h3>

                        <p className="text-gray-400 mt-2">
                          info@goldenupholstery.co.za
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex gap-5">
                      <div
                        className="
                          w-16 h-16
                          rounded-2xl
                          bg-[#D4AF37]/10
                          flex items-center justify-center
                          shrink-0
                        "
                      >
                        <MapPin className="text-[#D4AF37]" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">
                          Location
                        </h3>

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
                          flex items-center justify-center
                          shrink-0
                        "
                      >
                        <Clock className="text-[#D4AF37]" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">
                          Working Hours
                        </h3>

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

              {/* Google Map */}
              <div
                className="
                  h-[350px]
                  rounded-[40px]
                  overflow-hidden
                  shadow-2xl
                  border border-[#D4AF37]/10
                "
              >
                <iframe
                  src="https://www.google.com/maps?q=8+Jacaranda,+Arboretum,+Richards+Bay,+3900&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Golden Upholstery Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}