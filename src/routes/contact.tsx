import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { socials } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "hamgrainnovations.com/contact" },
      { name: "description", content: "Start the conversation with Hamilton Emmanuel. Websites, portals and dashboards for brands that care." },
      { property: "og:title", content: "hamgrainnovations.com/contact" },
      { property: "og:description", content: "Start the conversation with Hamilton Emmanuel." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setLoading(true);

  try {
    await emailjs.send(
      "service_n82gkdo",
      "template_vrttoc9",
      {
        from_name: name,
        from_email: email,
        project_type: projectType,
        message: message,
      },
      "yq_dp68lrZXIBuVvo"
    );

    setSent(true);

    setName("");
    setEmail("");
    setProjectType("");
    setMessage("");

  } catch (error) {
    console.error("Email sending failed:", error);
    alert("Message failed to send. Please try again.");
  }

  setLoading(false);
}

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Contact me</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl text-balance">
            Let's begin the <span className="text-gold">conversation</span>.
          </h1>
          <p className="mt-5 max-w-md text-muted-foreground">
            Tell me about your brand, your congregation, your school or your
            kitchen. I'll come back to you within one working day with next steps.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-surface text-gold"><Mail className="h-4 w-4" /></span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                <a href="mailto:hello@hamgra.dev" className="mt-1 block font-display text-lg hover:text-gold">hamiltonsmart30@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-surface text-gold"><Phone className="h-4 w-4" /></span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone / WhatsApp</p>
                <p className="mt-1 font-display text-lg">+234 708 475 3087</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-surface text-gold"><MapPin className="h-4 w-4" /></span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Based in</p>
                <p className="mt-1 font-display text-lg">Nigeria — working worldwide</p>
              </div>
            </li>
          </ul>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Social Media Handles</p>
            <div className="mt-4 flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border/60 bg-surface p-8 md:p-10"
        >
          <h2 className="font-display text-2xl">Send me a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">All fields are required.</p>

          <div className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Your name</span>

              <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rounded-lg border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-gold"
                placeholder="e.g. Chidi Okafor"
              />
            </label>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Email</span>

                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-gold"
                  placeholder="you@brand.com"
                />

              </label>
              <label className="grid gap-2 text-sm">
                <span className="font-medium">Project type</span>

              <select
                  name="projectType"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  required
                  className="rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-gold"
                >
                <option value="" disabled>
                Select a project type
                </option>
                  <option value="Business website">Business website</option>
                  <option value="Church website">Church website</option>
                  <option value="School website">School website</option>
                  <option value="Result portal">Result portal</option>
                  <option value="Admin dashboard">Admin dashboard</option>
                  <option value="Restaurant website">Restaurant website</option>
                <option value="Something else">Something else</option>
              </select>

              </label>
            </div>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Tell me about it</span>

              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="resize-none rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-gold"
                placeholder="What are you building, and what would 'great' look like?"
              />

            </label>

            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {loading
                ? "Sending..."
                : sent
                ? "Message sent"
                : "Send message"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}