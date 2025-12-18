import Image from "next/image";

export default function WeddingsPage() {
  return (
    <main className="bg-black text-white">

      {/* Hero Video */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/weddings.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-light leading-tight max-w-2xl">
            Weddings are not events.<br />They are emotions unfolding.
          </h1>
        </div>
      </section>

      {/* Statement */}
      <section className="py-32 px-6 text-center">
        <p className="max-w-3xl mx-auto text-lg font-light leading-relaxed text-zinc-300">
          From intimate rituals to grand celebrations, we document weddings
          with patience, presence, and cinematic restraint.
        </p>
      </section>

      {/* Moments */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5]">
          <Image src="/images/wed1.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/5]">
          <Image src="/images/wed2.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/5]">
          <Image src="/images/wed3.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/5]">
          <Image src="/images/wed4.jpg" alt="" fill className="object-cover" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center">
        <p className="text-sm uppercase tracking-widest text-zinc-400 mb-6">
          Begin your story
        </p>
        <a
          href="/contact"
          className="inline-block text-white text-lg border-b border-white/30 hover:border-white transition"
        >
          Contact Artistic Studio
        </a>
      </section>

    </main>
  );
}
