import Link from "next/link";


export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.webm"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-end justify-center pb-11">
        <div className="flex flex-col items-center gap-6 text-white">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl tracking-[0.18em] font-bold uppercase">
            ARTISTIC STUDIO 
          </h1>

          {/* Explore Button */}
          <Link href="/weddings">
          <button className="cursor-pointer border border-white/70 px-8 py-3 text-sm tracking-[0.25em] uppercase bg-transparent text-white hover:border-white transition-all duration-300">
            EXPLORE
          </button>
          </Link>

        </div>
      </div>
    </section>
  );
}
