import Image from "next/image";

export default function PortraitPage() {
  return (
    <main className="bg-white text-zinc-900">

      {/* Hero */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/images/pre-hero.jpg"
          alt="Pre wedding story"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/10" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-light leading-tight max-w-2xl">
            Before the wedding,<br />there is just the two of you.
          </h1>
        </div>
      </section>

      {/* Statement */}
      <section className="py-32 px-6 text-center">
        <p className="max-w-2xl mx-auto text-lg font-light leading-relaxed text-zinc-600">
          Pre-wedding stories are not about locations or poses.
          They are about comfort, connection, and moments that feel
          quietly yours.
        </p>
      </section>

      {/* Visual Story */}
      <section className="max-w-6xl mx-auto space-y-32 px-6 pb-40">

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Image
            src="/images/pre1.jpg"
            alt=""
            width={600}
            height={800}
            className="rounded-xl"
          />
          <p className="text-sm leading-relaxed text-zinc-600 max-w-sm">
            We begin slowly — letting you settle, forget the camera,
            and simply exist together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
          <p className="text-sm leading-relaxed text-zinc-600 max-w-sm md:order-2">
            No forced smiles. No instructions shouted.
            Just gentle guidance when needed.
          </p>
          <Image
            src="/images/pre2.jpg"
            alt=""
            width={600}
            height={800}
            className="rounded-xl md:order-1"
          />
        </div>

      </section>

      {/* CTA */}
      <section className="py-40 text-center bg-zinc-50">
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-6">
          Let’s create yours
        </p>
        <a
          href="/contact"
          className="inline-block text-lg border-b border-zinc-400 hover:border-zinc-900 transition"
        >
          Talk to Artistic Studio
        </a>
      </section>

    </main>
  );
}
