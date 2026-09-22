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
            Work Experience I&apos;ve done.
          </h2>
        </div>

        <div>
  {experience.map((experience, index) => (
    <div
      key={index}
      className="
        grid
        grid-cols-[45px_24px_1fr]
        gap-x-2

        sm:grid-cols-[60px_28px_1fr]
        sm:gap-x-3

        md:grid-cols-[100px_40px_1fr]
        md:gap-x-6
      "
    >

      {/* Year */}
      <div className="mt-1 justify-self-end">
        <span className="text-sm sm:text-base md:text-xl">
          {experience.year}
        </span>
      </div>

      {/* Dot */}
      <div className="mt-2 flex justify-center md:mt-5">
        <div className="h-4 w-4 rounded-full bg-accent sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </div>

      {/* Content */}
      <div className="min-w-0 pb-10 md:pb-12">
        <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">
          {experience.title}
        </h3>

        <p className="text-base text-accent sm:text-lg md:text-xl">
          {experience.company}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base md:mt-4 md:text-justify">
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
