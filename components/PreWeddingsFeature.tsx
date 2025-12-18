import Image from "next/image";

export default function PreWeddingsFeature() {
  return (
    <section className="bg-zinc-50 py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 mb-4">
            Pre-Weddings
          </p>

          <h2 className="text-3xl md:text-4xl font-light leading-snug text-zinc-900 mb-6">
            Stories before<br />the vows are spoken
          </h2>

          <p className="text-sm leading-relaxed text-zinc-600 max-w-md mb-8">
            Quiet glances. Unscripted laughter. Moments that belong only to the two of you —
            captured with honesty and calm.
          </p>

          <a
            href="/pre-weddings"
            className="inline-block text-sm tracking-wide text-zinc-900 border-b border-zinc-300 hover:border-zinc-900 transition"
          >
            Explore Pre-Wedding Stories
          </a>
        </div>

        {/* Visual */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
          <Image
            src="/images/prewedding.png"
            alt="Pre wedding photography"
            fill
            className="object-cover"
            priority={false}
          />
        </div>

      </div>
    </section>
  );
}
