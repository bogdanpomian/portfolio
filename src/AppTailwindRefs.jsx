function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <p className="mb-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
          Tailwind is working
        </p>

        {/* Title */}
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Hello Tailwind CSS
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          This is your first Tailwind project. You are styling this page using
          utility classes directly inside className.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Get Started
          </a>
          <a
            href="#"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Learn More
          </a>
        </div>

        {/* Text Color Demo */}
        <div className="mt-10 w-full max-w-2xl rounded-xl bg-slate-800/50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-cyan-200">Text Colors</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <p className="rounded-lg bg-slate-700 px-4 py-2 text-white">White text</p>
            <p className="rounded-lg bg-slate-700 px-4 py-2 text-slate-400">Gray text</p>
            <p className="rounded-lg bg-slate-700 px-4 py-2 text-cyan-300">Cyan text</p>
          </div>
        </div>

        {/* Font Weight Demo */}
        <div className="mt-6 w-full max-w-2xl rounded-xl bg-slate-800/50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-cyan-200">Font Weights</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <p className="rounded-lg bg-slate-700 px-4 py-2 font-normal">Normal</p>
            <p className="rounded-lg bg-slate-700 px-4 py-2 font-medium">Medium</p>
            <p className="rounded-lg bg-slate-700 px-4 py-2 font-bold">Bold</p>
          </div>
        </div>

        {/* Padding Demo */}
        <div className="mt-6 w-full max-w-2xl rounded-xl bg-slate-800/50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-cyan-200">Padding</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="rounded-lg bg-slate-700 p-4">Padding all around (p-4)</div>
            <div className="rounded-lg bg-slate-700 px-6 py-3">Horizontal & vertical (px-6 py-3)</div>
          </div>
        </div>

        {/* Margin Demo */}
        <div className="mt-6 w-full max-w-2xl rounded-xl bg-slate-800/50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-cyan-200">Margin</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="w-full rounded-lg bg-slate-700 p-4">
              <div className="m-4 rounded-lg bg-cyan-400/20 p-2 text-sm">Margin (m-4)</div>
            </div>
            <div className="w-full rounded-lg bg-slate-700 p-4">
              <div className="mt-6 rounded-lg bg-cyan-400/20 p-2 text-sm">Margin top (mt-6)</div>
            </div>
            <div className="w-full rounded-lg bg-slate-700 p-4">
              <div className="mb-4 rounded-lg bg-cyan-400/20 p-2 text-sm">Margin bottom (mb-4)</div>
            </div>
          </div>
        </div>

        {/* Border Radius Demo */}
        <div className="mt-6 w-full max-w-2xl rounded-xl bg-slate-800/50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-cyan-200">Border Radius</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="rounded-lg bg-slate-700 p-4">Small (rounded-lg)</div>
            <div className="rounded-2xl bg-slate-700 p-4">Big (rounded-2xl)</div>
            <div className="rounded-full bg-slate-700 p-4">Pill/Circle (rounded-full)</div>
          </div>
        </div>

        {/* Flexbox Centering Demo */}
        <div className="mt-6 w-full max-w-2xl rounded-xl bg-slate-800/50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-cyan-200">Flexbox Centering</h2>
          <div className="flex items-center justify-center rounded-lg bg-slate-700 p-4">
            Centered content
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;