'use client';

const projects = [
  '/images/p1.jpg',
  '/images/p2.jpg',
  '/images/p3.jpg',
  '/images/p4.jpg',
  '/images/p5.jpg',
  '/images/p6.jpg',
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-28 bg-dark px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-gold uppercase tracking-[4px] mb-4">
            Portfolio
          </p>

          <h2
            className="
              text-4xl md:text-5xl
              font-heading
              font-bold
            "
          >
            Our Latest Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((img, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-3xl
                group
              "
            >
              <img
                src={img}
                alt="Furniture"
                className="
                  w-full h-[400px]
                  object-cover
                  group-hover:scale-110
                  transition duration-700
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}