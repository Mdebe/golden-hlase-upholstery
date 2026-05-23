'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-black/70 backdrop-blur-md
        border-b border-gold/10
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-6 py-4
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="relative w-14 h-14">
            <Image
              src="/logo.png"
              alt="Golden H.N Hlase Upholstery"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <h1
              className="
                text-lg md:text-xl
                font-heading
                font-bold
                text-gold
              "
            >
              Golden H.N Hlase
            </h1>

            <p className="text-xs text-gray-400">
              Luxury Upholstery
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                text-sm uppercase tracking-wider
                text-gray-300
                hover:text-gold
                transition
              "
            >
              {link.name}
            </Link>
          ))}

          <button
            className="
              px-6 py-3 rounded-full
              bg-gold text-black
              font-semibold
              hover:scale-105 transition
            "
          >
            Get Quote
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            md:hidden
            bg-black border-t border-gold/10
            px-6 py-6
            flex flex-col gap-5
          "
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                text-gray-300
                hover:text-gold
                transition
              "
            >
              {link.name}
            </Link>
          ))}

          <button
            className="
              mt-4 py-3 rounded-full
              bg-gold text-black
              font-semibold
            "
          >
            Get Quote
          </button>
        </div>
      )}
    </header>
  );
}