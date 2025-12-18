"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`absolute top-4 left-0 w-full z-50 transition-all duration-300 ease-out
        ${hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      <div className="max-w-[85rem] mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/logo-white1.png"
            alt="Artistic Studio"
            width={120}
            height={35}
          />
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm text-white">
          <a href="/weddings" className="hover:text-zinc-300 transition">
            Weddings
          </a>
          <a href="/pre-weddings" className="hover:text-zinc-300 transition">
            Pre-Weddings
          </a>
          <a href="/contact" className="hover:text-zinc-300 transition">
            Contact
          </a>
          <a
            href="https://instagram.com/yourstudio"
            target="_blank"
            className="hover:text-zinc-300 transition"
          >
            <Instagram size={18} />
          </a>
        </nav>

      </div>
    </header>
  );
}
