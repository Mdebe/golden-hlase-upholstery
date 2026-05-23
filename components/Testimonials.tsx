'use client';

const testimonials = [
  {
    name: 'Customer Review',
    review:
      'Our old couches now look brand new. Excellent workmanship and professional service.',
  },
  {
    name: 'Happy Client',
    review:
      'Beautiful quality and amazing attention to detail. Highly recommended.',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 bg-dark px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gold uppercase tracking-[4px] mb-4">
          Testimonials
        </p>

        <h2
          className="
            text-4xl md:text-5xl
            font-heading
            font-bold
            mb-20
          "
        >
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                luxury-card
                rounded-3xl
                p-10
              "
            >
              <p
                className="
                  text-gray-300
                  leading-8
                  italic
                "
              >
                "{item.review}"
              </p>

              <h3 className="mt-6 text-gold font-semibold">
                — {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}