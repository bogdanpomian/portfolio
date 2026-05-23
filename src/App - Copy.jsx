function App() {
  return (
    // Main container: full viewport height, dark background, padding 6->24px, white text
    // Added: flex, items-center, justify-center for vertical+horizontal centering
    <main className="min-h-screen bg-slate-950 p-6 text-white flex items-center justify-center">
      {/* Card container:
         - max-w-md: limits width to 448px
         - rounded-3xl: large rounded corners
         - border border-white/10: subtle white border at 10% opacity
         - bg-white/5: semi-transparent white background at 5% opacity
         - p-8: 2rem padding inside the card
         - shadow-2xl: large, soft shadow for depth
         - backdrop-blur-sm: subtle blur effect for glassmorphism
      */}
      <section className="max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
        {/* Badge/Tag:
           - text-sm: small text
           - uppercase: ALL CAPS
           - tracking-widest: maximum letter spacing
           - text-cyan-300: light cyan color for accent
        */}
        <p className="text-sm uppercase tracking-widest text-cyan-300">
          Beginner Project
        </p>

        {/* Title:
           - mt-4: 1rem margin-top
           - text-3xl: large text
           - font-bold: bold font weight
           - text-white: white text
        */}
        <h1 className="mt-4 text-3xl font-bold text-white">Tailwind Card</h1>

        {/* Description:
           - mt-4: 1rem margin-top
           - leading-7: comfortable line height
           - text-slate-300: light gray text for secondary info
        */}
        <p className="mt-4 leading-7 text-slate-300">
          This card is styled using Tailwind classes. You can change the colors,
          spacing, border, and text size directly in the className.
        </p>

        {/* Button:
           - mt-6: 1.5rem margin-top
           - rounded-full: fully rounded pill shape
           - bg-cyan-300: light cyan background
           - px-6: horizontal padding
           - py-3: vertical padding
           - font-semibold: medium-bold text
           - text-slate-950: dark text for contrast
           - transition: smooth color transition
           - hover:bg-cyan-200: lighter cyan on hover
           - focus:outline-none: removes default focus outline
           - focus:ring-2: adds a visible focus ring
           - focus:ring-cyan-400: cyan focus ring color
           - focus:ring-offset-2: spacing around focus ring
           - focus:ring-offset-slate-950: offset color matching background
        */}
        <button className="mt-6 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950">
          Click Me
        </button>
      </section>
    </main>
  );
}

export default App;
