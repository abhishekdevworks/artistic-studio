"use client";

import Image from "next/image";
import { Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER BAR */}
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
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <a href="/weddings" className="hover:text-zinc-300 transition">
              Weddings
            </a>
            <a href="/pre-weddings" className="hover:text-zinc-300 transition">
              Pre-Weddings
            </a>
            <a href="/portrait" className="hover:text-zinc-300 transition">
              Portrait
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col justify-center items-center text-center">

          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Menu Links */}
          <nav className="flex flex-col gap-8 text-lg tracking-[0.2em]">
            <a href="/weddings" onClick={() => setMenuOpen(false)}>
              WEDDINGS
            </a>
            <a href="/pre-weddings" onClick={() => setMenuOpen(false)}>
              PRE-WEDDINGS
            </a>
            <a href="/portrait" onClick={() => setMenuOpen(false)}>
              PORTRAIT
            </a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>
              CONNECT
            </a>
          </nav>

          {/* Socials */}
          <div className="absolute bottom-12 flex gap-10 text-sm tracking-wide opacity-80">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      )}
    </>
  );
}
