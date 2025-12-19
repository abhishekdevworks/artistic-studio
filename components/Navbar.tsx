"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full">
        <div className="flex items-center justify-between px-6 py-5 md:px-10">

          {/* LOGO */}
          <Link href="/">
            <Image
              src="/images/logo-white1.png"
              alt="Artistic Studio"
              width={42}
              height={42}
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-10 text-white text-sm tracking-widest uppercase">
            <Link href="/weddings">Weddings</Link>
            <Link href="/pre-weddings">Pre-Weddings</Link>
            <Link href="/portrait">Portrait</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-center items-center text-white">

          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6"
          >
            <X size={32} />
          </button>

          {/* MENU ITEMS */}
          <nav className="flex flex-col items-center gap-10 text-xl tracking-widest uppercase">
            <Link href="/weddings" onClick={() => setOpen(false)}>Weddings</Link>
            <Link href="/pre-weddings" onClick={() => setOpen(false)}>Pre-Weddings</Link>
            <Link href="/portrait" onClick={() => setOpen(false)}>Portrait</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Connect</Link>
          </nav>

          {/* SOCIAL */}
          <div className="mt-16 flex gap-8 opacity-80">
            <a href="https://instagram.com" target="_blank">Instagram</a>
            <a href="https://facebook.com" target="_blank">Facebook</a>
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          </div>
        </div>
      )}
    </>
  );
}
