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

      {/* Content */}
      <div className="relative z-10 flex h-full items-end px-8 pb-16 md:px-20">
        <div className="max-w-lg text-white">
          <h3 className="cinematic-title text-white">
            Weddings
          </h3>
          <p className="mb-6 text-base text-zinc-200 md:text-lg">
            Timeless stories crafted with honesty, emotion, and elegance.
          </p>
          <a
            href="/weddings"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white opacity-90 hover:opacity-100"
          >
            View Stories →
          </a>
        </div>
      </div>
    </section>
  );
}
