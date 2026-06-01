import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white text-zinc-600">
      {/* Adjusted grid system to 3 columns for uniform proportions */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 py-16 md:grid-cols-3">
        {/* Brand Profile */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
            StyleHub
          </h2>
          <p className="max-w-xs text-xs leading-relaxed text-zinc-500">
            Discover modern apparel architectures and refined essentials meticulously crafted for daily versatility.
          </p>
        </div>

        {/* Navigation Vector: Shop */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-950">
            Shop
          </h3>
          <ul className="flex flex-col gap-2.5 text-xs">
            <li>
              <Link href="/products" className="text-zinc-500 hover:text-zinc-950 transition-colors">
                Men&apos;s Fashion
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-zinc-500 hover:text-zinc-950 transition-colors">
                Women&apos;s Fashion
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-zinc-500 hover:text-zinc-950 transition-colors">
                New Arrivals
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation Vector: Company */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-950">
            Company
          </h3>
          <ul className="flex flex-col gap-2.5 text-xs">
            <li>
              <Link href="/about" className="text-zinc-500 hover:text-zinc-950 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-zinc-500 hover:text-zinc-950 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-zinc-500 hover:text-zinc-950 transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Disclaimer */}
      <div className="border-t border-zinc-200/60 bg-zinc-50/50 py-8 text-center text-[11px] text-zinc-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p>© {new Date().getFullYear()} StyleHub Ltd. All product blueprints reserved.</p>
        </div>
      </div>
    </footer>
  );
}