import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Osas
            </h2>
            <p className="mt-4 text-sm text-gray-400">
              Web Designer & Developer helping hotels, schools, clinics,
              restaurants and local businesses build modern websites that
              attract customers.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>emmanueloseyamen@gmail.com</span>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+234 707 998 9263</span>
              </li>

              <li className="flex items-center gap-2">
                <MessageCircle size={16} />
                <a
                  href="https://wa.me/2347079989263"
                  target="_blank"
                  className="hover:text-white"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#process" className="hover:text-white">Process</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} Osas. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}