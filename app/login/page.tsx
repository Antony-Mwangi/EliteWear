"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-50/60 flex flex-col antialiased selection:bg-zinc-900 selection:text-white">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        
        {/* Back to Homepage Link Link */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-950 transition-colors group"
        >
          <svg 
            className="h-3.5 w-3.5 transform transition-transform group-hover:-translate-x-0.5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Return to homepage
        </Link>

        {/* Login Card Container */}
        <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm">
          {/* Brand Header Context */}
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-4 flex-shrink-0">
              <Image
                src="/logo2.PNG"
                alt="StyleHub Logo"
                width={32}
                height={32}
                priority
                className="object-contain"
              />
            </div>

            <h1 className="text-xl font-medium tracking-tight text-zinc-950">
              Welcome back
            </h1>
            <p className="mt-1.5 text-xs text-zinc-500">
              Sign in to access your private profile and curated collections.
            </p>
          </div>

          {/* Input Interactive Fields */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-medium text-zinc-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="name@example.com"
                className="h-10 w-full rounded-md border border-zinc-200 bg-white px-3 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-950 transition-colors"
              />
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-zinc-700"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-zinc-400 hover:text-zinc-950 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                required
                placeholder="••••••••"
                className="h-10 w-full rounded-md border border-zinc-200 bg-white px-3 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-zinc-950 focus:outline-none focus:ring-1 focus:ring-zinc-950 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full h-10 items-center justify-center rounded-md bg-zinc-900 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 transition-colors mt-2"
            >
              Sign In
            </button>
          </form>

          {/* Visual Structural Separation Vector */}
          <div className="my-6 flex items-center">
            <div className="h-px flex-1 bg-zinc-200"></div>
            <span className="px-3 text-[10px] font-medium uppercase tracking-widest text-zinc-400">
              Or continue with
            </span>
            <div className="h-px flex-1 bg-zinc-200"></div>
          </div>

          {/* Google Authentication Asset Layer */}
          <button
            type="button"
            className="inline-flex w-full h-10 items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582l3.51-3.51C17.642 1.055 14.982 0 12 0 7.354 0 3.319 2.668 1.3 6.568l3.966 3.197z"
              />
              <path
                fill="#4285F4"
                d="M23.74 12.273c0-.827-.074-1.623-.21-2.39H12v4.51h6.605A5.666 5.666 0 0 1 16.14 18.15l3.864 3c2.264-2.09 3.736-5.163 3.736-8.877z"
              />
              <path
                fill="#FBBC05"
                d="M1.3 6.568A11.944 11.944 0 0 0 0 12c0 1.927.455 3.74 1.259 5.357l3.996-3.1A7.12 7.12 0 0 1 4.91 12c0-1.99.814-3.79 2.122-5.103L1.3 6.568z"
              />
              <path
                fill="#34A853"
                d="M1.259 17.357C3.25 21.314 7.314 24 12 24c3.24 0 5.955-1.077 7.94-2.925l-3.864-3c-1.1.737-2.514 1.182-4.076 1.182-3.045 0-5.623-2.055-6.54-4.813l-4.195 3.251z"
              />
            </svg>
            Google
          </button>

          {/* Dynamic Navigation Fallback Link */}
          <p className="mt-6 text-center text-xs text-zinc-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-zinc-950 underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Create one
            </Link>
          </p>
        </div>
      </main>

      {/* Footer Element Group */}
      <Footer />
    </div>
  );
}