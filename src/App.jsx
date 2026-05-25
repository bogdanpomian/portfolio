import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    {
      title: "Design & Development",
      icon: "✦",
      text: "I design responsive interfaces and build structured front-end layouts using HTML, CSS, Tailwind, Bootstrap, JavaScript, and jQuery.",
    },
    {
      title: "Visual Communication",
      icon: "◎",
      text: "I create visual assets, layouts, brand materials, and digital graphics that support websites, campaigns, and online presence.",
    },
    {
      title: "Digital Experience Refinement",
      icon: "◒",
      text: "I improve existing websites by refining structure, usability, responsiveness, and the small details that make an interface feel polished.",
    },
  ];

  const services = [
    {
      title: "Web Design",
      icon: "▧",
      items: [
        "Responsive design",
        "UI/UX layouts",
        "Landing pages",
        "Design refresh",
      ],
    },
    {
      title: "Front-End Development",
      icon: "{ }",
      items: [
        "HTML, CSS/SCSS",
        "Tailwind / Bootstrap",
        "JavaScript / jQuery enhancements",
      ],
    },
    {
      title: "Website Support",
      icon: "⌁",
      items: [
        "Website maintenance",
        "Content updates",
        "Performance optimization",
      ],
    },
    {
      title: "SEO & Content",
      icon: "◎",
      items: [
        "On-page SEO",
        "Content structure",
        "Analytics setup",
        "Search Console support",
      ],
    },
    {
      title: "Graphic Design",
      icon: "✺",
      items: [
        "Logo design",
        "Business cards",
        "Flyers & brochures",
        "Social media graphics",
      ],
    },
    {
      title: "Creative Content",
      icon: "✧",
      items: [
        "Digital assets",
        "Campaign graphics",
        "Image editing",
        "Brand visual support",
      ],
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Research phase",
      text: "Define the project goal, audience, message, content needs, and creative direction.",
    },
    {
      step: "02",
      title: "Implementation phase",
      text: "Turn the visual direction into responsive layouts, structured sections, and polished front-end details.",
    },
    {
      step: "03",
      title: "Optimization phase",
      text: "Refine usability, responsiveness, visual polish, SEO structure, and final delivery details.",
    },
  ];

  const tools = [
    "HTML5",
    "CSS",
    "SCSS",
    "Tailwind CSS",
    "Bootstrap",
    "JavaScript",
    "jQuery",
    "Figma",
    "Adobe XD",
    "Photoshop",
    "Adobe Illustrator",
    "WordPress",
    "PrestaShop",
    "Liferay",
    "SEO",
    "Google Analytics",
    "Search Console",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#17163f] text-white">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#7c73ff]/20 blur-3xl"></div>
        <div className="absolute -right-48 top-32 h-[36rem] w-[36rem] rounded-full bg-[#b7b0ff]/20 blur-3xl"></div>
        <div className="absolute -bottom-56 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#6d63ff]/20 blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-white/10 bg-[#111033]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center">
            <img
              src="/logo.png"
              alt="Bogdan Pomian logo"
              className="h-auto w-32"
            />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden gap-8 text-xs font-bold uppercase tracking-[0.3em] text-white/65 md:flex">
            <a href="#home" className="transition hover:text-[#a7a0ff]">
              Home
            </a>
            <a href="#about" className="transition hover:text-[#a7a0ff]">
              About
            </a>
            <a href="#skills" className="transition hover:text-[#a7a0ff]">
              Skills
            </a>
            <a href="#services" className="transition hover:text-[#a7a0ff]">
              Services
            </a>
            <a href="#workflow" className="transition hover:text-[#a7a0ff]">
              Workflow
            </a>
            <a href="#contact" className="transition hover:text-[#a7a0ff]">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-full border border-white/30 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] transition duration-300 hover:border-[#a7a0ff] hover:bg-[#a7a0ff] hover:text-[#17163f] md:inline-flex"
          >
            Let’s Talk
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#a7a0ff] transition hover:bg-white/10 hover:text-white md:hidden"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition ${
                  isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-full rounded-full bg-current transition ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-full rounded-full bg-current transition ${
                  isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              ></span>
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="border-t border-white/10 bg-[#111033] px-6 py-5 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm font-bold uppercase tracking-[0.25em] text-white/70">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="transition hover:text-[#a7a0ff]"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="transition hover:text-[#a7a0ff]"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setIsMenuOpen(false)}
                className="transition hover:text-[#a7a0ff]"
              >
                Skills
              </a>

              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="transition hover:text-[#a7a0ff]"
              >
                Services
              </a>

              <a
                href="#workflow"
                onClick={() => setIsMenuOpen(false)}
                className="transition hover:text-[#a7a0ff]"
              >
                Workflow
              </a>

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="transition hover:text-[#a7a0ff]"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="relative -left-1 mt-2 inline-flex w-fit rounded-full border border-[#a7a0ff]/50 bg-[#a7a0ff] px-4 py-3 text-xs font-bold text-[#17163f] transition duration-300 hover:bg-white"
              >
                Let’s Talk
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center md:py-32 lg:py-36"
      >
        <div className="absolute left-6 top-16 hidden h-24 w-24 rounded-full border-[18px] border-[#7c73ff] md:block lg:left-10 lg:top-20"></div>

        <div className="absolute right-6 top-16 hidden h-28 w-28 rounded-full bg-[#b7b0ff] opacity-80 md:block lg:right-10 lg:top-20"></div>

        <div className="absolute bottom-16 left-8 hidden h-36 w-44 bg-[#b7b0ff] opacity-80 [clip-path:polygon(50%_0%,0%_100%,100%_100%)] md:block lg:bottom-20 lg:left-16"></div>

        <div className="absolute bottom-20 right-6 hidden h-32 w-32 rotate-12 rounded-4xl bg-[#6d63ff] opacity-85 shadow-2xl shadow-[#6d63ff]/30 md:block lg:right-10"></div>

        <div className="absolute left-1/2 top-28 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#7c73ff]/25 blur-3xl"></div>

        <div className="max-w-5xl">
          {/* Mobile headline */}
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:hidden">
            Building digital experiences.
          </h1>

          {/* Desktop / tablet headline: 768px and up */}
          <h1 className="hidden text-6xl font-black leading-none tracking-tight md:block md:text-8xl">
            Building
            <br />
            custom-made
            <br />
            digital experiences.
          </h1>
        </div>

        <h2 className="mt-6 text-2xl font-semibold text-[#d8d5ff] md:text-3xl">
          Web Designer & Front-End Developer
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/60">
          I create responsive websites and visual assets that help great ideas
          look
          <br /> professional, memorable, and easy to use.
        </p>

        <div className="mt-10 flex flex-row items-center justify-center gap-3">
          <a
            href="#services"
            className="rounded-full bg-[#7c73ff] px-5 py-4 text-sm font-bold text-white shadow-2xl shadow-[#7c73ff]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#918aff] sm:px-8 sm:text-base"
          >
            View Services
          </a>

          <a
            href="#about"
            className="rounded-full border border-[#a7a0ff]/40 bg-white/5 px-5 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-[#a7a0ff] hover:bg-[#a7a0ff] hover:text-[#17163f] sm:px-8 sm:text-base"
          >
            Explore
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/10 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#a7a0ff]">
              About
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              I turn ideas into sharp, responsive, and visually confident web
              experiences.
            </h2>
          </div>

          <div className="max-w-2xl space-y-5 text-lg leading-8 text-white/65">
            <p>
              <span className="font-bold text-white">Hello! </span>I’m Bogdan
              Pomian, a web designer and front-end focused developer based in
              Timișoara, Romania.
            </p>

            <p>
              I design polished mockups and build responsive websites and
              customized web portals for clients across international markets.
            </p>

            <p>
              I combine design, front-end development, and SEO to move projects
              from early visual ideas to polished, maintainable websites. This
              helps me support both the creative direction and the practical
              details needed to make a website work well across devices.
            </p>
          </div>

          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-4xl border border-white/10 bg-[#201f55]/80 shadow-2xl shadow-black/20">
            <img
              src="src/assets/fookenguy.png"
              alt="Illustrated portrait in a purple canyon scene"
              className="aspect-5/5 h-full w-full object-cover object-right"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#111033]/15"></div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111033]/80 via-transparent to-transparent"></div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"></div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-y border-white/10 bg-[#111033] py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#a7a0ff]">
              What I Know
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              A practical mix of design, code, and website improvement.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skill) => (
              <article
                key={skill.title}
                className="group rounded-4xl border border-white/10 bg-[#201f55]/80 p-8 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-[#a7a0ff]/70 hover:bg-[#28266a]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a7a0ff] text-xl font-black text-[#17163f] shadow-xl shadow-[#7c73ff]/30 transition duration-300 group-hover:rotate-6 group-hover:bg-white">
                  {skill.icon}
                </div>

                <h3 className="text-2xl font-black">{skill.title}</h3>

                <p className="mt-5 leading-8 text-white/60">{skill.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#a7a0ff]">
                What I Offer
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                Services grouped clearly by purpose.
              </h2>
            </div>

            <p className="text-lg leading-8 text-white/60">
              A focused service set for building websites, improving digital
              presence, and creating supporting visual assets.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-4xl border border-white/10 bg-[#201f55]/80 p-8 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-[#a7a0ff]/70 hover:bg-[#28266a]"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a7a0ff] text-xl font-black text-[#17163f] shadow-xl shadow-[#7c73ff]/30 transition duration-300 group-hover:rotate-6 group-hover:bg-white">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-black">{service.title}</h3>

                <ul className="mt-6 space-y-3 text-white/65">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#a7a0ff]"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        id="workflow"
        className="border-y border-white/10 bg-[#111033] py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#a7a0ff]">
            Workflow
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {workflow.map((item) => (
              <div
                key={item.title}
                className="group rounded-4xl border border-white/10 bg-[#201f55]/80 p-8 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-[#a7a0ff]/70 hover:bg-[#28266a]"
              >
                <p className="text-[#a7a0ff] transition duration-300 group-hover:text-white">
                  {item.step}
                </p>

                <h3 className="mt-6 text-2xl font-black">{item.title}</h3>

                <p className="mt-4 leading-7 text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#a7a0ff]">
            Technologies & Tools
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
            Tools I use for design, front-end, branding, and website
            improvement.
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="whitespace-nowrap rounded-full border border-white/10 bg-[#201f55] px-4 py-2 text-center text-sm text-[#d8d5ff] transition duration-300 hover:border-[#a7a0ff] hover:bg-[#a7a0ff] hover:text-[#17163f]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#201f55] p-8 shadow-2xl shadow-black/30 md:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#a7a0ff]/30 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#7c73ff]/30 blur-3xl"></div>

          <div className="relative grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#a7a0ff]">
                Open for collaborations
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                Have an idea worth turning into a website?
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                I’m available for web design, front-end interfaces, branding
                visuals, and website optimization work.
              </p>
            </div>

            <div className="mx-auto flex w-full max-w-md flex-col gap-4 md:mx-0 md:ml-auto">
              <a
                href="mailto:pomian.bogdan@gmail.com"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#201f55]/80 px-6 py-4 font-bold text-white shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-[#a7a0ff]/70 hover:bg-[#28266a]"
              >
                <span>Send me an email!</span>

                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-5 w-5 text-[#a7a0ff] transition duration-300 group-hover:rotate-6 group-hover:text-white"
                />
              </a>

              <a
                href="tel:+40751250747"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#201f55]/80 px-6 py-4 font-bold text-white shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-[#a7a0ff]/70 hover:bg-[#28266a]"
              >
                <span>Let's talk!</span>

                <FontAwesomeIcon
                  icon={faPhone}
                  className="h-5 w-5 text-[#a7a0ff] transition duration-300 group-hover:rotate-6 group-hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#111033]/90 py-8 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center text-sm text-white/45">
          <p>© 2026 Bogdan Pomian. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/bogdan-p-b16bb3180/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/55 transition duration-300 hover:border-[#a7a0ff] hover:bg-[#a7a0ff] hover:text-[#17163f]"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="h-4 w-4" />
            </a>

            <a
              href="https://github.com/bogdanpomian"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/55 transition duration-300 hover:border-[#a7a0ff] hover:bg-[#a7a0ff] hover:text-[#17163f]"
            >
              <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
            </a>

            <a
              href="https://www.instagram.com/bogdan_pomian/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/55 transition duration-300 hover:border-[#a7a0ff] hover:bg-[#a7a0ff] hover:text-[#17163f]"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
            </a>

            <a
              href="https://x.com/PomianBogdan"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/55 transition duration-300 hover:border-[#a7a0ff] hover:bg-[#a7a0ff] hover:text-[#17163f]"
            >
              <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
