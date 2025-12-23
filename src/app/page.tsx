import Image from "next/image";
import Link from "next/link";
import DemoCard from "@/components/DemoCard";
import StackGroup from "@/components/StackGroup";
import TechBadge from "@/components/TechBadge";

export default function HomePage() {
  return (
    <>
      <header className="border-b border-b-zinc-300 sticky top-0 w-full left-0 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold text-orange-900">
              <Image
                height={30}
                width={100}
                src="/images/icon.png"
                alt="Logo"
              />
            </Link>

            <nav className="flex items-center gap-6 text-sm">
              <Link
                href="/login"
                className="text-gray-600 hover:text-orange-600 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-md bg-orange-200 px-4 py-2 text-orange-600 hover:bg-orange-100 transition"
              >
                Register
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="bg-white text-gray-900">
        <section className="mesh-background">
          <div className="px-6 py-24 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight">
              A Kanban board for managing tasks and team workflows.
            </h1>

            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-600">
              A portfolio project showcasing clean UI, drag-and-drop
              interactions, and modern full-stack patterns using React, Next.js,
              and Tailwind CSS.
            </p>

            <div className="mt-10">
              <Link
                href="/login"
                className="inline-flex items-center rounded-md bg-orange-900 px-4 py-2 text-white hover:bg-orange-800 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-zinc-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              What this project demonstrates
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <DemoCard
                title="Drag-and-drop workflows"
                description="Task movement across columns using a Kanban-style interaction model."
              />

              <DemoCard
                title="Optimistic UI updates"
                description="Immediate UI feedback with graceful handling of async state changes."
              />

              <DemoCard
                title="State coordination"
                description="Clear separation of local, derived, and server-backed state."
              />

              <DemoCard
                title="Access-aware interfaces"
                description="UI behavior that adapts based on authentication and user roles."
              />

              <DemoCard
                title="Component-driven UI"
                description="Reusable components with predictable data flow and structure."
              />

              <DemoCard
                title="Responsive layouts"
                description="Mobile-first layouts implemented with Tailwind CSS."
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Tech stack
          </h2>

          <div className="mt-10 space-y-8">
            <StackGroup title="Frontend">
              <TechBadge label="React" />
              <TechBadge label="Next.js" />
              <TechBadge label="Tailwind CSS" />
            </StackGroup>

            <StackGroup title="State & UI">
              <TechBadge label="Local state" />
              <TechBadge label="Derived state" />
              <TechBadge label="Optimistic updates" />
            </StackGroup>

            <StackGroup title="Backend">
              <TechBadge label="API-driven architecture" />
              <TechBadge label="Mocked or real backend" />
            </StackGroup>

            <StackGroup title="Authentication">
              <TechBadge label="Session-based authentication" />
            </StackGroup>
          </div>
        </section>
      </main>

      <footer className="border-t border-t-zinc-300 bg-zinc-100">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">
              Built with <span className="text-red-500">love</span> by{" "}
              <span className="font-medium text-gray-900">Onah Victor</span>
            </p>

            <nav className="flex gap-6 text-sm">
              <Link
                href="/login"
                className="text-gray-600 hover:text-orange-900 transition"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="text-gray-600 hover:text-orange-900 transition"
              >
                Register
              </Link>

              <a
                href="https://github.com/your-username/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-900 transition"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
