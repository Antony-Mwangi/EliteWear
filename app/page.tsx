import Link from 'next/link';

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
}

const FEATURES: FeatureCard[] = [
  {
    icon: (
      <svg className="h-6 w-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-.446-.26-.85-.667-1.031l-4.25-1.922a1.125 1.125 0 0 0-1.01 0l-1.21.547m1.21-1.574A1.5 1.5 0 0 0 16.25 4.5H12M15 11.25a2.25 2.25 0 0 1-4.5 0" />
      </svg>
    ),
    title: "Fast Delivery",
    description: "Get your orders delivered quickly and safely to your doorstep."
  },
  {
    icon: (
      <svg className="h-6 w-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "Secure Payments",
    description: "Safe, encrypted, and trusted digital checkout experience."
  },
  {
    icon: (
      <svg className="h-6 w-6 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.98 20.53a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    title: "Quality Products",
    description: "Carefully curated inventories sourced from highly certified suppliers."
  }
];

const PRODUCT_MOCK: Product[] = [
  { id: 1, title: "Minimalist Leather Pack", description: "Premium full-grain leather everyday carry engineered for modern utilities.", price: "120" },
  { id: 2, title: "Anodized Desk Organiser", description: "Machined aluminum utility tray designed to cleanly map workspace workflows.", price: "85" },
  { id: 3, title: "Chrono Quartz Timepiece", description: "Water-resistant brushed steel hardware incorporating minimal sapphire dials.", price: "210" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white">
      {/* Global Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 h-16">
          <Link href="/" className="text-xl font-semibold tracking-tight text-zinc-950 hover:opacity-90 transition-opacity">
            ShopEase
          </Link>

          <nav className="flex items-center gap-8">
            <Link href="#products" className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors">
              Products
            </Link>
            <Link href="/login" className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors">
              Log in
            </Link>
            <Link
              href="/register"
              className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 transition-colors"
            >
              Sign up
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Block */}
        <section className="relative overflow-hidden bg-white border-b border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 md:py-32 flex flex-col items-center text-center">
            <h1 className="max-w-3xl text-4xl font-normal tracking-tight text-zinc-950 sm:text-6xl">
              Discover curated products crafted for longevity.
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-zinc-500 leading-relaxed">
              Shop secure configurations from a globally trusted ecosystem built with seamless customer logistics and fast freight routing.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link
                href="/products"
                className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-900 px-6 font-medium text-white shadow hover:bg-zinc-800 transition-colors"
              >
                Browse Catalog
              </Link>
              <Link
                href="/register"
                className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-200 bg-white px-6 font-medium text-zinc-600 shadow-sm hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
              >
                Create an account
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Value Propositions */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <div key={index} className="flex flex-col items-start p-6 bg-white rounded-xl border border-zinc-200/60 shadow-sm">
                <div className="p-2.5 bg-zinc-50 rounded-lg border border-zinc-100 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-base font-medium text-zinc-950">{feature.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Catalog Showcase */}
        <section id="products" className="bg-white border-y border-zinc-200 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center text-center mb-14">
              <h2 className="text-2xl font-medium tracking-tight text-zinc-950 sm:text-3xl">
                Featured Collections
              </h2>
              <p className="mt-2 text-sm text-zinc-500">
                Explore our signature arrivals updated weekly.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {PRODUCT_MOCK.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md"
                >
                  {/* Aspect-ratio box simulating image container */}
                  <div className="aspect-[4/3] w-full bg-zinc-100 transition-colors group-hover:bg-zinc-200/70" />

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-950">
                        {product.title}
                      </h3>
                      <span className="text-sm font-semibold text-zinc-900">
                        KSh {product.price}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-zinc-500 line-clamp-2 leading-relaxed flex-1">
                      {product.description}
                    </p>

                    <div className="mt-5">
                      <Link 
                        href={`/products/${product.id}`}
                        className="inline-flex w-full h-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-xs font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                      >
                        View Specifications
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contextual Action Call */}
        <section className="bg-zinc-950 py-20 text-center text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 flex flex-col items-center">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Elevate your retail experience.
            </h2>
            <p className="mt-4 max-w-lg text-sm text-zinc-400 leading-relaxed">
              Join thousands of collectors subscribing to transparent checkout pipelines and priority asset fulfillment channels.
            </p>
            <Link
              href="/register"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-white px-6 font-medium text-zinc-950 shadow hover:bg-zinc-50 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <footer className="border-t border-zinc-200 bg-white py-12 text-center text-xs text-zinc-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p>© {new Date().getFullYear()} ShopEase Ltd. All architecture reserved.</p>
        </div>
      </footer>
    </div>
  );
}