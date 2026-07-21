import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export const socials = [
  { label: "X", href: "https://www.x.com/HamiltonEm61639", icon: XIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hamilton-emmanuel-52050b343?trk=contact-info", icon: Linkedin },
  { label: "GitHub", href: "https://www.github.com/IamHamiltonEmmanuel", icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/hamiltonemmanuel946?igsh=YzljYTk1ODg3Zg==", icon: Instagram },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">

              <img
                src={logo}
                alt="Hamgra Innovations Logo"
                className="h-8 w-8 object-contain"
              />
              
              <span className="font-display text-2xl tracking-tight">
                HAMGRA INNOVATIONS<span className="text-gold">.</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Digital craft for ambitious brands, communities and institutions.
              Built with clarity, hosted for speed, designed to last.
            </p>
            <p className="mt-6 font-display text-sm italic text-gold">
              — Hamilton Emmanuel, Founder
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold">Portfolio</Link></li>
              <li><Link to="/process" className="hover:text-gold">How I Work</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-gold">Get in touch</h4>
            <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> hamiltonsmart30@gmail.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +234 708 475 3087</li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} HAMGRA Innovations. All rights reserved.</p>
          <p className="font-display italic text-gold/80">Designed and Developed by Hamgra Innovations</p>
        </div>
      </div>
    </footer>
  );
}