import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="
          absolute inset-0
          h-full w-full
          object-contain
          md:object-cover
        "
        src="/videos/hero.webm"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Optional subtle overlay (keep very light) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content – stays at bottom like premium hero */}
      <div className="absolute inset-0 flex items-end justify-center pb-14">
        <div className="flex flex-col items-center gap-7 text-white text-center">

          {/* Title */}
          <h1
            className="
              font-[var(--font-headings)]
              text-[24px]
              md:text-[28px]
              tracking-[0.35em]
              font-medium
              uppercase
            "
          >
            ARTISTIC STUDIO
          </h1>

          {/* Explore Button */}
          <Link href="/weddings">
            <button
              className="
                border border-white/60
                px-10 py-3
                text-[12px]
                tracking-[0.35em]
                uppercase
                bg-transparent
                text-white
                hover:border-white
                transition-all
                duration-300
              "
            >
              EXPLORE
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}
