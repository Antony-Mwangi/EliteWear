"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to login");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      router.push("/");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to continue shopping
          </p>
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 p-4 text-sm font-medium text-red-700 border border-red-100">
            <div className="flex">
              <span>{error}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="wamalwa@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 transition duration-200 text-base"
              required
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 transition duration-200 text-base"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center rounded-xl bg-black px-4 py-3 text-base font-semibold text-white transition duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Signing In...
              </span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-black hover:underline underline-offset-4"
          >
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}