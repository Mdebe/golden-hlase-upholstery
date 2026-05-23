'use client';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-darkSecondary px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-gold uppercase tracking-[4px] mb-4">
            Contact
          </p>

          <h2
            className="
              text-4xl md:text-5xl
              font-heading
              font-bold
            "
          >
            Request A Free Quote
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="luxury-card p-10 rounded-3xl">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="
                  w-full p-4 rounded-xl
                  bg-black border border-gold/20
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full p-4 rounded-xl
                  bg-black border border-gold/20
                  outline-none
                "
              />

              <textarea
                rows={6}
                placeholder="Tell us about your furniture..."
                className="
                  w-full p-4 rounded-xl
                  bg-black border border-gold/20
                  outline-none
                "
              />

              <button
                className="
                  px-8 py-4 rounded-full
                  bg-gold text-black
                  font-semibold
                  hover:scale-105 transition
                "
              >
                Send Request
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <h3
              className="
                text-3xl
                font-heading
                font-bold
                mb-8
              "
            >
              Contact Information
            </h3>

            <div className="space-y-6 text-gray-300">
              <p>📞 +27 XX XXX XXXX</p>
              <p>📧 info@goldenupholstery.co.za</p>
              <p>📍 Durban, South Africa</p>
              <p>🕒 Monday - Saturday | 8AM - 5PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}