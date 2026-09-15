import { ArrowUpRight } from "lucide-react"
import { projects } from "../data"

export default function Work() {
  return (
    <section id="work" className="border-t border-white/10 py-24 md:py-32">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Projects I&apos;ve built.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-bg-card p-7 transition-colors hover:border-accent/40"
            >
              <div>
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="shrink-0 font-mono text-xs text-white/40">{project.year}</span>
                </div>
                <p className="text-sm leading-relaxed text-white/60">{project.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ArrowUpRight
                size={20}
                className="absolute right-6 top-6 text-white/0 transition-colors group-hover:text-accent"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
