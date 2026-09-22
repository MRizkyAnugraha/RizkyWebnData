import { ArrowDown, MapPin } from "lucide-react"
import { profile } from "../data"

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen md:min-h-[70vh] items-center overflow-hidden">
      <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div
        className="absolute left-1/2 top-1/3 -z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />

      <div className="container relative z-10 py-28">
        <div className="mb-6 flex items-center gap-2 text-sm text-white/50">
          <MapPin size={15} className="text-accent" />
          <span className="font-mono uppercase tracking-wider">{profile.location}</span>
        </div>

        <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent">
          {profile.role}
        </p>

        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-10">

          <h1 className="mt-8 max-w-4xl text-6xl font-extrabold leading-[0.95] tracking-tighter text-balance sm:text-7xl md:text-8xl">
            WEB DEV
            <span className="h-auto text-white/30"> | </span>
            <br></br>
            <span className="text-accent">BI &amp; DATA</span>
          </h1>

          <img src="/RLogo.webp" alt="Profile" className="mt-8 ml-auto mr-auto w-[30vw] md:w-[20vw] lg:w-[40vh]" /> 
        </div>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 text-balance">
          {profile.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Contact me
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-accent"
        aria-label="Scroll to about"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  )
}
