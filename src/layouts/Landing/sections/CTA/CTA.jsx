const CTA = () => {
  return (
    <section className="bg-white px-6 py-24 lg:px-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-3xl border-[0.4px] border-black/80 px-8 py-16 text-center">
        <h2 className="font-geist text-3xl font-bold text-black sm:text-4xl md:text-5xl">
          Ready to modernize your trade operations?
        </h2>
        <p className="max-w-xl text-base text-black/60 sm:text-lg">
          Join customs brokers, importers and enterprises already automating compliance with
          TradeSift.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#get-started"
            className="rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition hover:bg-black/80"
          >
            GET STARTED
          </a>
          <a
            href="#signin"
            className="rounded-full border border-black/20 bg-white px-8 py-4 text-base font-medium text-black transition hover:bg-black/5"
          >
            SIGN IN
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
