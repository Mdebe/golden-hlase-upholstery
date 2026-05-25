import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-yellow-600/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">
              Golden H.N Hlase Upholstery
            </h2>

            <p className="text-gray-400 mt-3 leading-relaxed">
              Premium car seat covers, vehicle interiors, sofa upholstery,
              and furniture restoration services in South Africa.
            </p>

            <p className="text-yellow-500 mt-4 font-medium">
              Restoring Comfort & Luxury
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Location
            </h3>

            <p className="text-gray-400">
              Richards Bay, KwaZulu-Natal
              <br />
              South Africa
            </p>

            <p className="text-gray-500 mt-3 text-sm">
              Serving Richards Bay, Empangeni, eSikhawini, Durban, and surrounding KZN areas.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact
            </h3>

            <p className="text-gray-400">
              Phone: +27 61 310 5030
            </p>

            <p className="text-gray-400 mt-2">
              Email: info@goldenhnhlase.co.za
            </p>

            <p className="text-gray-500 mt-3 text-sm">
              Mon - Sat | 08:00 - 17:00
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Golden H.N Hlase Upholstery. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">

            <Link
              href="/"
              className="hover:text-yellow-500 transition"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="hover:text-yellow-500 transition"
            >
              About
            </Link>

            <Link
              href="/services"
              className="hover:text-yellow-500 transition"
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="hover:text-yellow-500 transition"
            >
              Contact
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}