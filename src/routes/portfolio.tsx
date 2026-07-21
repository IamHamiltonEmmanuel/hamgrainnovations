import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Download } from "lucide-react";
import { projects } from "@/data/projects";
import { downloadCV } from "@/lib/download-cv";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "hamgrainnovations.com/portfolio" },
      { name: "description", content: "Selected work by Hamilton Emmanuel: websites and platforms for churches, schools, restaurants and businesses." },
      { property: "og:title", content: "hamgrainnovations.com/portfolio" },
      { property: "og:description", content: "Selected work by Hamilton Emmanuel." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <section className="border-b border-border/60 bg-surface/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Portfolio</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl text-balance">
              Work I'm proud to <span className="text-gold">sign my name</span> to.
            </h1>
            <p className="mt-5 max-w-xl text-muted-foreground">
              A selection of recent launches; each one a partnership with a
              team that cared as much about the details as I did.
            </p>
          </div>
          <button
            onClick={downloadCV}
            className="inline-flex items-center gap-2 self-start rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:border-gold hover:text-gold md:self-auto"
          >
            <Download className="h-4 w-4" /> Download my Resume
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-16">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`grid gap-8 md:grid-cols-2 md:items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-2xl border border-border/60">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="text-gold">{p.category}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{p.year}</span>
                </div>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">{p.title}</h2>
                <p className="mt-4 text-muted-foreground">{p.description}</p>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  View Website Live <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}