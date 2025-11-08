import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-900/80 backdrop-blur-md border-t border-zinc-800 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo / Brand */}
          <div>
            <div className="relative w-30 h-15">
              <Link href="/">
                <Image
                  src="/rico-logo2.png"
                  alt="MyBrand Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </Link>
            </div>
            <p className="text-zinc-400 mt-2 max-w-sm">
              Quality packaging solutions and reliable trading services in
              Dammam, delivering durable and customizable products for all
              industries.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10 text-zinc-300">
            <div>
              <h3 className="font-semibold text-white mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about-us" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-white transition">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} MyBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
