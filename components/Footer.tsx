import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Brand */}
        <div>
          <Image
            src="/images/logo-white.png"
            alt="Artistic Studio"
            width={140}
            height={40}
            className="mb-6"
          />
          <p className="text-sm leading-relaxed max-w-xs">
            Artistic Studio — crafting honest wedding and pre-wedding stories
            with emotion, restraint, and timeless detail.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6">
            Explore
          </p>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="/weddings" className="hover:text-white transition">
                Weddings
              </a>
            </li>
            <li>
              <a href="/pre-weddings" className="hover:text-white transition">
                Pre-Weddings
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6">
            Connect
          </p>

          <div className="space-y-4 text-sm">
            <a
              href="https://instagram.com/yourstudio"
              target="_blank"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <Instagram size={16} />
              Instagram
            </a>

            <a
              href="tel:+919900000000"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <Phone size={16} />
              Call
            </a>

            <a
              href="mailto:hello@artisticstudio.in"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>

      </div>

      <div className="mt-20 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Artistic Studio. All rights reserved.
      </div>
    </footer>
  );
}
