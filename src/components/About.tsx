import { profile, stats } from "../data"

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 py-24 md:py-32">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent">
              About Me
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              From data insights to full applications.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-white/70 text-balance">
              {profile.about}
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-3xl font-bold text-accent md:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
