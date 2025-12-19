import Image from "next/image";

export default function EditorialBreak() {
  return (
    <section className="w-full bg-white text-black border-t border-zinc-200 border-b border-zinc-200">
      <div className="mx-auto max-w-3xl px-7 py-8 text-center">

        {/* Statement Text */}
        <p className="mx-auto max-w-[820px] font-[var(--font-headings)] text-[14px] leading-[2] tracking-wide text-zinc-800 text-center">
          Crafting timeless memories with artistry and precision, we redefine
          wedding photography through innovation, elegance, and heartfelt
          storytelling. Every frame we capture is a celebration of love,
          tailored to create an unforgettable experience.
        </p>

        {/* Logo */}
        <div className="mt-3 flex justify-center">
          <Image
            src="/images/Artistic Studio landscape B Logo.png"
            alt="Artistic Studio Logo"
            width={40}
            height={40}
            className="opacity-100"
          />
        </div>

      </div>
    </section>
  );
}
