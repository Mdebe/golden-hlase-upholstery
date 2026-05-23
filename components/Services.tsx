'use client';

import {
  Sofa,
  Wrench,
  Armchair,
  Building2,
} from 'lucide-react';

const services = [
  {
    title: 'Upholstery Services',
    icon: Sofa,
    items: [
      'Sofa Upholstery',
      'Dining Chairs',
      'Headboards',
      'Leather Upholstery',
    ],
  },
  {
    title: 'Furniture Repairs',
    icon: Wrench,
    items: [
      'Foam Replacement',
      'Frame Repairs',
      'Cushion Repairs',
      'Spring Replacement',
    ],
  },
  {
    title: 'Custom Furniture',
    icon: Armchair,
    items: [
      'Luxury Sofas',
      'Ottomans',
      'Modern Couches',
      'Lounge Suites',
    ],
  },
  {
    title: 'Commercial Upholstery',
    icon: Building2,
    items: [
      'Hotel Furniture',
      'Office Seating',
      'Restaurant Booths',
      'Waiting Rooms',
    ],
  },
];

export default function Services() {
  return (
    <section className="py-28 px-6 bg-darkSecondary">
      <div className="max-w-7xl mx-auto">
        <h2
          className="
            text-4xl md:text-5xl
            font-heading
            text-center
            mb-20
          "
        >
          Our <span className="text-gold">Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                luxury-card
                rounded-3xl
                p-8
                hover:-translate-y-2
                transition
              "
            >
              <service.icon
                className="
                  w-12 h-12
                  text-gold mb-6
                "
              />

              <h3 className="text-2xl font-semibold mb-6">
                {service.title}
              </h3>

              <ul className="space-y-3 text-gray-300">
                {service.items.map((item, i) => (
                  <li key={i}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}