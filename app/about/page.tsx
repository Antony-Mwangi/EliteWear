
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50/60 flex flex-col antialiased selection:bg-zinc-900 selection:text-white">


      <main className="flex-1">
        {/* Hero Context Block */}
        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 md:py-32">
            <h1 className="text-4xl font-normal tracking-tight text-zinc-950 sm:text-5xl">
              About StyleHub
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg">
              We are dedicated to providing high-quality foundational pieces with a 
              seamless digital shopping experience, encrypted payments, and reliable 
              global delivery pathways.
            </p>
          </div>
        </section>

        {/* Structural Value Propositions Grid */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Core Mission */}
            <div className="rounded-xl border border-zinc-200/60 bg-white p-6 shadow-sm">
              <div className="mb-4 w-fit rounded-lg border border-zinc-100 bg-zinc-50 p-2.5">
                <svg className="h-5 w-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
                </svg>
              </div>
              <h3 className="text-base font-medium text-zinc-950">
                Our Mission
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                To make premium minimalist fashion accessible through a modern, 
                architectural, and secure online shopping framework.
              </p>
            </div>

            {/* Quality Standards */}
            <div className="rounded-xl border border-zinc-200/60 bg-white p-6 shadow-sm">
              <div className="mb-4 w-fit rounded-lg border border-zinc-100 bg-zinc-50 p-2.5">
                <svg className="h-5 w-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <h3 className="text-base font-medium text-zinc-950">
                Quality First
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                Every single garment item is meticulously sampled to ensure it 
                meets rigid modern standards for durability, composition, and drape.
              </p>
            </div>

            {/* Customer Focus */}
            <div className="rounded-xl border border-zinc-200/60 bg-white p-6 shadow-sm">
              <div className="mb-4 w-fit rounded-lg border border-zinc-100 bg-zinc-50 p-2.5">
                <svg className="h-5 w-5 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <h3 className="text-base font-medium text-zinc-950">
                Customer Focus
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                We prioritize user experiences by deploying clean navigation interfaces, 
                dedicated user support, and expedited tracking logistics.
              </p>
            </div>

          </div>
        </section>

        {/* Brand Focus Callout Framework */}
        <section className="bg-white py-20 border-t border-zinc-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="rounded-2xl bg-zinc-950 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
              <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">
                Fashion Built Around You
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-400">
                StyleHub fuses deliberate proportions and exceptional engineering pipelines 
                to create an online apparel ecosystem that feels completely direct, 
                secure, and uncompromised.
              </p>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
}