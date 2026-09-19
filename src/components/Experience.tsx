import { experience } from "../data"

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 py-24 md:py-32">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent">
            Work Experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Working Experience I&apos;ve done.
          </h2>
        </div>

        {/* <div className="grid gap-6 md:grid-cols-2">
          {experience.map((experience) => (
            <article
              key={experience.title}
              className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-bg-card p-7 transition-colors hover:border-accent/40"
            >
              <div>
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                  <span className="shrink-0 font-mono text-xs text-white/40">{experience.year}</span>
                </div>
                <p className="text-sm leading-relaxed text-white/60">{experience.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span
                    key={experience.year}
                    className="rounded-full border border-white/10 bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
                  >
                    {experience.year}
                  </span>
              </div>

            </article>
          ))}
        </div> */}

        <div>
      {experience.map((experience, index) => (
        <div
          key={index}
          className="grid grid-cols-[70px_32px_1fr] gap-x-4 md:grid-cols-[100px_40px_1fr] md:gap-x-6"
        >

          {/* Year */}
          <div className="justify-self-end">
            <span className="bg-zinc-600 px-3 py-1">
              {experience.year}
            </span>
          </div>

          {/* Dot */}
          <div className="flex justify-center">
            <div className="h-6 w-6 rounded-full bg-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.7)]" />
          </div>

          {/* Content */}
          <div className="pb-12">
            <h3 className="text-2xl font-semibold">
              {experience.title}
            </h3>

            <p className="text-xl">
              {experience.company}
            </p>

            <p className="mt-4 leading-relaxed text-zinc-300">
              {experience.description}
            </p>
          </div>

        </div>
      ))}
    </div>

      </div>
    </section>
  )
}
