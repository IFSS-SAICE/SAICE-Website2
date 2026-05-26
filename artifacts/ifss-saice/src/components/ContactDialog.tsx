import { useState, type ReactNode, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { T, useTT } from "@/lib/i18n";

interface ContactDialogProps {
  children: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
}

export function ContactDialog({ children, title, description }: ContactDialogProps) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const tt = useTT();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setOpen(false);
      setTimeout(() => setSent(false), 300);
    }, 1600);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        {sent ? (
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-7 h-7 text-accent" strokeWidth={2} />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
              <T en="Message sent" fr="Message envoyé" />
            </h2>
            <p className="text-sm text-foreground/65 max-w-sm">
              <T en="Thank you — we'll get back to you within a few working days." fr="Merci — nous vous répondrons d'ici quelques jours ouvrables." />
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl font-semibold tracking-tight">
                {title ?? <T en="Contact us" fr="Nous contacter" />}
              </DialogTitle>
              <DialogDescription className="text-sm text-foreground/65">
                {description ?? <T en="Tell us how we can help. We answer most messages within a few working days." fr="Dites-nous comment nous pouvons aider. Nous répondons à la plupart des messages en quelques jours ouvrables." />}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/65 mb-1.5">
                  <T en="Name" fr="Nom" />
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full h-11 px-3 rounded-lg border border-foreground/15 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/65 mb-1.5">
                    <T en="Email" fr="Courriel" />
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full h-11 px-3 rounded-lg border border-foreground/15 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/65 mb-1.5">
                    <T en="Phone" fr="Téléphone" /> <span className="text-foreground/40 normal-case tracking-normal font-normal"><T en="(optional)" fr="(facultatif)" /></span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full h-11 px-3 rounded-lg border border-foreground/15 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-topic" className="block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/65 mb-1.5">
                  <T en="Topic" fr="Sujet" />
                </label>
                <select
                  id="contact-topic"
                  name="topic"
                  required
                  defaultValue=""
                  className="w-full h-11 px-3 rounded-lg border border-foreground/15 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40"
                >
                  <option value="" disabled>{tt("Select a topic…", "Choisir un sujet…")}</option>
                  <option value="partnership">{tt("Partnership", "Partenariat")}</option>
                  <option value="donation">{tt("Donation", "Don")}</option>
                  <option value="volunteer">{tt("Volunteer / internship", "Bénévolat / stage")}</option>
                  <option value="media">{tt("Media or press", "Médias ou presse")}</option>
                  <option value="general">{tt("General question", "Question générale")}</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/65 mb-1.5">
                  <T en="Message" fr="Message" />
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-3 py-2.5 rounded-lg border border-foreground/15 bg-background text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-11 px-5 rounded-full text-sm font-semibold text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-colors"
                >
                  <T en="Cancel" fr="Annuler" />
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-foreground text-background hover:bg-foreground/85 text-sm font-semibold transition-colors"
                >
                  <T en="Send message" fr="Envoyer le message" />
                  <Send className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
