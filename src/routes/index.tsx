import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download, ExternalLink, Quote, Sparkles } from "lucide-react";
import portrait from "@/assets/hamilton-portrait.png";
import { projects } from "@/data/projects";
import { downloadCV } from "@/lib/download-cv";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { title: "Business Websites", copy: "Conversion-focused sites for brands that want to be taken seriously." },
  { title: "Church Websites", copy: "Warm, editorial homes for growing congregations, with giving & sermons." },
  { title: "School Websites", copy: "Prestige-forward institutional sites with an admissions funnel built in." },
  { title: "Result Portals", copy: "Secure student logins, printable report cards and parent-friendly access." },
  { title: "Admin Dashboards", copy: "All-in-one control rooms for schools, staff and operations." },
  { title: "Restaurant Websites", copy: "Cinematic menus, reservations and stories that sell the experience." },
];

const testimonials = [
  {
    quote:
      "Hamilton didn't just build our website; he understood our congregation. The site feels like us, only sharper.",
    name: "Apostle Michael E. Priest",
    role: "Zion Priesthood Gospel Centre",
  },
  {
    quote:
      "Working with Hamilton was an excellent experience from start to finish. He delievered a professional responsive website that perfectly reflects our brand and significantly improve how clients engage with our recruitment services.",
    name: "Mr. Matthew O.",
    role: "Scalable Talent Nigeria",
  },
  {
    quote:
      "We are impressed with the professionalism, reliability, and exceptional support provided throughout the project.",
    name: "Mrs. Angela E.",
    role: "Angelic Academy",
  },
];

function Index() {
  const featured = projects.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-gold/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-20 md:grid-cols-[1.15fr_1fr] md:pt-24 lg:pb-28">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-surface px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Sparkles className="h-3 w-3 text-gold" /> WELCOME TO MY PORTFOLIO | HAMGRA INNOVATIONS
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-balance md:text-6xl lg:text-7xl">
              I'm <span className="text-gold">Hamilton Emmanuel</span>.
              <br />I build websites that make brands unforgettable.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              From cathedral pulpits to school corridors, from restaurant kitchens
              to boardrooms; HAMGRA Innovations crafts mind-blowing digital
              experiences for businesses, churches, schools and small brands.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                See the portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                onClick={downloadCV}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Download className="h-4 w-4" /> Download Resume
              </button>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-6">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Projects</dt>
                <dd className="mt-1 font-display text-2xl">30+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Clients</dt>
                <dd className="mt-1 font-display text-2xl">25+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Years</dt>
                <dd className="mt-1 font-display text-2xl">5+</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-gold/30 via-transparent to-primary/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border/60">
              <img
                src={portrait}
                alt="Portrait of Hamilton Emmanuel"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-6">
                <p className="font-display text-lg text-primary-foreground">Hamilton Emmanuel</p>
                <p className="text-sm text-primary-foreground/70">Founder & Lead Developer, HAMGRA Innovations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border/60 bg-surface/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold">What I build</p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">Six ways I help brands show up online.</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Every project starts with clarity; who you serve, what they need, and what makes you unmistakable.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article key={s.title} className="group bg-background p-8 transition-colors hover:bg-card">
                <p className="font-display text-4xl text-gold/50">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-6 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Featured work</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">Recent launches.</h2>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium hover:text-gold">
            View the full portfolio <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <article key={p.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs uppercase tracking-widest text-gold">{p.category}</p>
                <h3 className="mt-2 font-display text-xl">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold"
                >
                  View Website Live <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Kind words</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">What clients say.</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex h-full flex-col rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.03] p-8">
                <Quote className="h-6 w-6 text-gold" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-primary-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-primary-foreground/10 pt-4">
                  <p className="font-display text-base">{t.name}</p>
                  <p className="text-sm text-primary-foreground/60">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 rounded-3xl border border-border/60 bg-surface p-10 md:grid-cols-[1.4fr_1fr] md:p-14">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Let's begin the conversation</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">
              Send me a message; the best projects start with a hello.
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Whether it's a fresh brand or a rescue mission, tell me what you're
              building. I read every message personally and reply within 24 hours.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Contact me <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={downloadCV}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:border-gold hover:text-gold"
            >
              <Download className="h-4 w-4" /> Download Resume
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
