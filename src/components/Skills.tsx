import { skillGroups } from "../data"

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 bg-bg-soft py-24 md:py-32">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent">
            Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            The tools and skills I build with.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-white/10 bg-bg-card p-6 transition-colors hover:border-accent/40"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
