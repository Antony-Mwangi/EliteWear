import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FEATURES: FeatureCard[] = [
  {
    icon: (
      <svg className="h-6 w-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-.446-.26-.85-.667-1.031l-4.25-1.922a1.125 1.125 0 0 0-1.01 0l-1.21.547m1.21-1.574A1.5 1.5 0 0 0 16.25 4.5H12M15 11.25a2.25 2.25 0 0 1-4.5 0" />
      </svg>
    ),
    title: "Complimentary Delivery",
    description: "Enjoy fast, tracked, and insured shipping on all seasonal orders.",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "Secure Checkouts",
    description: "Fully encrypted transaction gateways prioritizing your privacy.",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l.75-2.524a1.75 1.75 0 011.082-1.144l2.562-.854m-4.394 4.522L8 21l-.53-4.878m4.394-4.522L12 3l.53 8.622m0 0l1.144 1.082 2.524.75-4.2 4.2" />
      </svg>
    ),
    title: "Premium Fabrics",
    description: "Meticulously sourced textiles cut for structured silhouettes and durability.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 md:py-32">
            <h1 className="max-w-3xl text-4xl font-normal tracking-tight text-zinc-950 sm:text-6xl">
              Signature garments crafted for modern wardrobes.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-500 sm:text-lg">
              Explore timeless silhouettes engineered with exceptional craftsmanship, deliberate proportions, and premium sustainable materials.
            </p>

            <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
              <Link
                href="/products"
                className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-900 px-6 font-medium text-white transition-colors hover:bg-zinc-800"
              >
                Shop New Arrivals
              </Link>

              <Link
                href="/register"
                className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-200 bg-white px-6 font-medium text-zinc-600 shadow-sm transition-colors hover:bg-zinc-50 hover:text-zinc-900"
              >
                Join Private List
              </Link>
            </div>
          </div>
        </section>

        {/* Features Elements */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-zinc-200/60 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 w-fit rounded-lg border border-zinc-100 bg-zinc-50 p-2.5">
                  {feature.icon}
                </div>

                <h3 className="text-base font-medium text-zinc-950">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Framework */}
        <section className="bg-white py-20 border-t border-zinc-200">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="rounded-2xl bg-zinc-950 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
              <h2 className="text-2xl font-normal tracking-tight sm:text-3xl">
                Refine your everyday uniform.
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
                Create an account for expedited global shipping pipelines, order transaction histories, and private entry to limited collection drops.
              </p>

              <Link
                href="/register"
                className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-white px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-100"
              >
                Create Account
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}