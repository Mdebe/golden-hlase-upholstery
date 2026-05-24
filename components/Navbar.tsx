'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-[#0A0A0A]/90
        backdrop-blur-xl
        border-b border-[#D4AF37]/10
        shadow-lg shadow-black/20
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-6 lg:px-8
          py-4
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="
            flex items-center
            group
          "
        >
          <div
            className="
              relative
              w-24 h-24
              md:w-28 md:h-28
              transition duration-300
              group-hover:scale-105
            "
          >
            <Image
              src="/logo.png"
              alt="Golden H.N Hlase Upholstery"
              fill
              priority
              className="
                object-contain
                drop-shadow-[0_0_18px_rgba(212,175,55,0.25)]
              "
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                relative
                text-sm uppercase
                tracking-[3px]
                text-gray-300
                hover:text-[#D4AF37]
                transition duration-300

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[1px]
                after:w-0
                after:bg-[#D4AF37]
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {link.name}
            </Link>
          ))}

          {/* CTA Button */}
          <Link href="/contact">
            <button
              className="
                px-7 py-3 rounded-full
                bg-[#D4AF37]
                text-black
                font-semibold
                tracking-wide
                hover:scale-105
                hover:bg-[#C9971C]
                transition duration-300
                shadow-xl shadow-[#D4AF37]/20
              "
            >
              Get Quote
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-white
            hover:text-[#D4AF37]
            transition
          "
        >
          {open ? (
            <X size={32} />
          ) : (
            <Menu size={32} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden
            bg-[#0A0A0A]
            border-t border-[#D4AF37]/10
            px-6 py-8
            flex flex-col gap-6
          "
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                text-gray-300
                hover:text-[#D4AF37]
                transition
                uppercase
                tracking-[3px]
                text-sm
              "
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
          >
            <button
              className="
                mt-4 w-full py-4 rounded-full
                bg-[#D4AF37]
                text-black
                font-semibold
                tracking-wide
                shadow-lg shadow-[#D4AF37]/20
              "
            >
              Get Quote
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}