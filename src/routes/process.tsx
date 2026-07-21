import { createFileRoute } from "@tanstack/react-router";
import { Compass, MessageCircle, PenTool, Rocket, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "hamgrainnovations.com/process" },
      { name: "description", content: "The five-step process Hamilton Emmanuel uses to design and ship digital products that last." },
      { property: "og:title", content: "hamgrainnovations.com/process" },
      { property: "og:description", content: "A calm, five-step process for shipping digital products that last." },
    ],
  }),
  component: Process,
});

const steps = [
  { icon: MessageCircle, title: "Listen", copy: "We start with a real conversation. Your goals, your audience, your voice; before a single pixel." },
  { icon: Compass, title: "Plan", copy: "I turn the messy middle into a clear sitemap, content plan and visual direction you can sign off on." },
  { icon: PenTool, title: "Design", copy: "Custom typography, colour and layout; never a template. You see progress every few days, not at the end." },
  { icon: Rocket, title: "Build & Launch", copy: "Hand-crafted code, hosted on fast infrastructure, tested on real devices before we go live." },
  { icon: ShieldCheck, title: "Support", copy: "30 days of free polish after launch, plus optional care plans for updates, backups and monitoring." },
];

function Process() {
  return (
    <>
      <section className="border-b border-border/60 bg-surface/60">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">How I work</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl text-balance">
            A calm process. <span className="text-gold">Confident outcomes.</span>
          </h1>
          <p className="mt-5 text-muted-foreground">
            Every HAMGRA project follows the same rhythm; so you always know what
            comes next, what's expected of you, and when we go live.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <ol className="relative space-y-10 border-l border-border/60 pl-8">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[43px] grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-gold">
                <s.icon className="h-4 w-4" />
              </span>
              <p className="font-display text-sm text-gold">Step {String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-1 font-display text-2xl md:text-3xl">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.copy}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}