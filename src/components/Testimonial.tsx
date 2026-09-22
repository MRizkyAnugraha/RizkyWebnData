import { testimonials } from "../data"

export default function Testimonial() {
  return (
    <section id="testimonials" className="border-t border-white/10 py-24 md:py-32">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What They Say About Me.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-bg-card p-7 transition-colors hover:border-accent/40"
            >
              <div>
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="mb-4 items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                    <h4 className="text-m font-semibold text-accent">{testimonial.title}</h4>
                    <h5 className="text-s font-semibold text-accent">{testimonial.company}</h5>
                  </div>
                  <span className="shrink-0 font-mono text-md text-white/40">{testimonial.year}</span>
                </div>
                <p className="text-sm leading-relaxed text-white/60 text-justify">{testimonial.description}</p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
