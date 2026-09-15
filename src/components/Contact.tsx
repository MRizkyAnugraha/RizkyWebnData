import { Github, Linkedin, Mail } from "lucide-react"
import { profile } from "../data"

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-bg-soft py-24 md:py-32">
      <div className="container flex flex-col items-center text-center">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent">
          Contact
        </p>
        <h2 className="max-w-2xl text-4xl font-extrabold tracking-tighter text-balance md:text-6xl">
          LET&apos;S COLLABORATE
        </h2>
        <p className="mt-6 max-w-lg text-lg text-white/60 text-balance">
          Have a project in mind or just want to connect? I&apos;m always open to new
          opportunities and conversations.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
        >
          <Mail size={17} />
          {profile.email}
        </a>

        <div className="mt-10 flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-3 text-white/60 transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-3 text-white/60 transition-colors hover:border-accent/40 hover:text-accent"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
