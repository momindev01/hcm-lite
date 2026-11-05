import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col">

      {/* Navigation bar */}
      <nav className="flex items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold text-blue-400">
          HCM Lite
        </h1>

        <Link
          href="/login"
          className="text-slate-300 hover:text-white"
        >
          Login
        </Link>
      </nav>

      {/* Main content */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Human Capital Management
        </p>

        <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
          Manage Your People.
          <span className="text-blue-400"> Grow Your Business.</span>
        </h2>

        <p className="mt-6 max-w-xl text-lg text-slate-400">
          A simple platform to manage employees, attendance,
          leaves, payroll and your organization's workforce.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-8 py-3 font-semibold hover:bg-blue-700"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="rounded-lg border border-slate-600 px-8 py-3 font-semibold hover:bg-slate-800"
          >
            Sign In
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-slate-500">
        © 2026 HCM Lite. All rights reserved.
      </footer>

    </main>
  );
}
