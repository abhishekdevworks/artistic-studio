"use client";

import Image from "next/image";
import { Instagram, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [hidden, setHidden] = useState(false); // header hide on scroll
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down → hide header
        setHidden(true);
      } else {
        // scrolling up → show header
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER BAR */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out
          ${hidden ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div className="max-w-[85rem] mx-auto px-4 py-4 flex items-center justify-between bg-black/80 backdrop-blur-md">
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
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-white">
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
      <div
        className={`
          fixed top-0 right-0 w-full h-full z-[60] flex flex-col justify-center items-center text-center
          transform transition-transform duration-500 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Optional dim overlay behind menu */}
        {/*
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        */}

        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        {/* Menu Links */}
        <nav className="flex flex-col gap-8 text-lg tracking-[0.2em] text-white">
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
        <div className="absolute bottom-12 flex gap-10 text-sm tracking-wide opacity-80 text-white">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </>
  );
}
