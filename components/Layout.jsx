import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER (Same as index.jsx) */}
      <header className="bg-[#8B6E3F] text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <Link href="/" className="text-2xl font-bold">
            River View Villas
          </Link>
          <nav className="space-x-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/packages" className="hover:underline">
              Packages
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow">{children}</main>

      {/* FOOTER */}
      <footer className="bg-gray-100 text-center py-4 text-gray-600 text-sm">
        © {new Date().getFullYear()} River View Villas. All rights reserved.
      </footer>
    </div>
  );
}
