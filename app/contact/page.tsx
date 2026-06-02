// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50/60 flex flex-col antialiased selection:bg-zinc-900 selection:text-white">
      

      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          
          {/* Header Context Section */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <h1 className="text-3xl font-normal tracking-tight text-zinc-950 sm:text-4xl">
              Contact Support
            </h1>
            <p className="mt-3 text-xs leading-relaxed text-zinc-500">
              Have questions about your merchant records, shop inventory, or payment integrations? 
              Reach out to the SokoDirect team through any of our channels below.
            </p>
          </div>

          {/* Three-Column Communication Channels Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            
            {/* Direct Voice Support */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm flex flex-col items-center">
              <div className="mb-4 rounded-lg border border-zinc-100 bg-zinc-50 p-2.5 text-zinc-900">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.47-5.114-3.76-6.578-6.579l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.107a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                </svg>
              </div>

              <h2 className="text-sm font-medium text-zinc-950">
                Call Support
              </h2>
              <p className="mt-1 text-xs text-zinc-400">
                Speak directly with an operations representative.
              </p>

              <a
                href="tel:+254795984567"
                className="mt-4 text-xs font-medium text-zinc-950 underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                +254 795 984 567
              </a>
            </div>

            {/* Electronic Mail Support */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm flex flex-col items-center">
              <div className="mb-4 rounded-lg border border-zinc-100 bg-zinc-50 p-2.5 text-zinc-900">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>

              <h2 className="text-sm font-medium text-zinc-950">
                Email Support
              </h2>
              <p className="mt-1 text-xs text-zinc-400">
                Send us an operational log inquiry anytime.
              </p>

              <a
                href="mailto:antonymwangiw85@gmail.com"
                className="mt-4 text-xs font-medium text-zinc-950 underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                antonymwangiw85@gmail.com
              </a>
            </div>

            {/* Instant Messaging Support Channel */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm flex flex-col items-center">
              <div className="mb-4 rounded-lg border border-zinc-100 bg-zinc-50 p-2.5 text-zinc-900">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </div>

              <h2 className="text-sm font-medium text-zinc-950">
                WhatsApp Business
              </h2>
              <p className="mt-1 text-xs text-zinc-400">
                Chat directly for localized immediate merchant help.
              </p>

              <a
                href="https://wa.me/254795984567"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xs font-medium text-zinc-950 underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Message on WhatsApp
              </a>
            </div>

          </div>

    
          <div className="mt-12 rounded-2xl bg-zinc-950 p-6 text-center text-white sm:p-10 max-w-2xl mx-auto">
            <h2 className="text-xl font-normal tracking-tight">
              Merchant Support Timelines
            </h2>
            <div className="mt-4 flex flex-col gap-1 text-xs text-zinc-400">
              <p>Monday – Saturday: 8:00 AM – 6:00 PM (EAT)</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

        </section>
      </main>


    </div>
  );
}