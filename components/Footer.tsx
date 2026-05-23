export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-gold/10">
      <div
        className="
          max-w-7xl mx-auto
          px-6
          flex flex-col md:flex-row
          items-center justify-between
          gap-4
        "
      >
        <p className="text-gray-400">
          © 2026 Golden H.N Hlase’s Upholstery
        </p>

        <p className="text-gold">
          Restoring Comfort & Luxury
        </p>
      </div>
    </footer>
  );
}