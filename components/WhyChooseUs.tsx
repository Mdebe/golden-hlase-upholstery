'use client';

const features = [
  {
    title: 'Premium Quality',
    desc: 'High-quality materials and luxury finishes.',
  },
  {
    title: 'Skilled Craftsmanship',
    desc: 'Experienced upholstery specialists.',
  },
  {
    title: 'Custom Designs',
    desc: 'Furniture tailored to your style.',
  },
  {
    title: 'Affordable Luxury',
    desc: 'Luxury quality at competitive pricing.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-darkSecondary px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-gold uppercase tracking-[4px] mb-4">
            Why Choose Us
          </p>

          <h2
            className="
              text-4xl md:text-5xl
              font-heading
              font-bold
            "
          >
            Excellence In Every Stitch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                luxury-card
                rounded-3xl
                p-8 text-center
              "
            >
              <h3
                className="
                  text-2xl
                  font-semibold
                  text-gold
                  mb-4
                "
              >
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}