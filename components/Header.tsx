import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 h-16">
        {/* Logo Configuration */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-zinc-950 hover:opacity-90 transition-opacity"
        >
          {/* Increased container to h-8 w-8 (32px) for a sharper, clear presentation */}
          <div className="relative h-8 w-8 flex-shrink-0">
            <Image
              src="/logo2.PNG" 
              alt="StyleHub Logo"
              fill
              priority
              className="object-contain"
            />
          </div> 
          <span>StyleHub</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Shop
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors"
          >
            Log in
          </Link>

          <Link
            href="/register"
            className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}