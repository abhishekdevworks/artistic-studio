import Link from "next/link";

export default function WeddingsFeature() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/weddings.jpg"
        alt="Artistic Studio Weddings"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content — SAME AS HERO POSITION */}
      <div className="absolute inset-0 flex items-end justify-center pb-11">
        <div className="flex flex-col items-center gap-6 text-white">

          {/* Title */}
          <h2
            className="
              font-[var(--font-headings)]
              text-[24px]
              md:text-[28px]
              tracking-[0.35em]
              font-medium
              uppercase
            "
          >
            WEDDINGS
          </h2>

          {/* Explore Button */}
          <Link href="/weddings">
            <button
              className="
                cursor-pointer
                border border-white/70
                px-8 py-3
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
