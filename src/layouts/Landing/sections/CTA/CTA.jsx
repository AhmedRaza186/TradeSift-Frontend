const CTA = () => {
  return (
    <section className="bg-[#040509] px-6 py-24 lg:px-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 text-center">
        <h2 className="font-geist text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Ready to modernize your trade operations?
        </h2>
        <p className="max-w-xl text-base text-white/60 sm:text-lg">
          Join customs brokers, importers and enterprises already automating compliance with
          TradeSift.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#get-started"
            className="rounded-full bg-[#FAF0CB] px-8 py-4 text-base font-semibold text-black transition hover:bg-white"
          >
            GET STARTED
          </a>
          <a
            href="#signin"
            className="rounded-full border border-white/50 bg-black/20 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10"
          >
            SIGN IN
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
