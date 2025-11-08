"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const isHome = pathname === "/";

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine navbar background
  const bgClass = isHome
    ? isScrolled
      ? "bg-zinc-900/70 backdrop-blur-md border-b border-zinc-800"
      : "bg-transparent border-transparent"
    : "bg-zinc-900/70 backdrop-blur-md border-b border-zinc-800";

  // Text color: always white for non-home pages
  const textClass = "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${bgClass}`}
    >
      <div className="mx-auto flex items-center justify-between px-6 py-4 max-w-7xl">
        {/* Logo */}
        <div className="relative w-36 h-12">
          <Link href="/">
            <Image
              src="/rico-logo2.png"
              alt="MyBrand Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-8 transition ${textClass}`}
        >
          <li>
            <Link href="/" className="hover:text-gray-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-gray-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-300 transition">
              Products
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition ${textClass}`}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden px-6 py-4 space-y-4 transition ${bgClass}`}>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block transition ${textClass} hover:text-gray-500`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            onClick={() => setIsOpen(false)}
            className={`block transition ${textClass} hover:text-gray-500`}
          >
            About
          </Link>
          <Link
            href="/products"
            onClick={() => setIsOpen(false)}
            className={`block transition ${textClass} hover:text-gray-500`}
          >
            Products
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`block transition ${textClass} hover:text-gray-500`}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
