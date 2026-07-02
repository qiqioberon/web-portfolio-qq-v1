import { useEffect, useRef } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { gsap } from "@/hooks/useGSAP";

const emailAddress = "aquq1q1.farrukh@gmail.com";
const whatsappNumber = "6283121552206";

const whatsappLinks = {
  english: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Aqil, I found your portfolio and would like to discuss a project with you.",
  )}`,
  indonesian: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Halo Aqil, saya menemukan portfolio Anda dan ingin berdiskusi mengenai sebuah proyek.",
  )}`,
} as const;

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        y: 36,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        clearProps: "transform",
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 78%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="px-6 py-32">
      <div className="contact-content mx-auto max-w-4xl text-center">
        <span className="contact-reveal mb-4 block font-mono text-sm uppercase tracking-wider text-primary">
          Get in Touch
        </span>
        <h2 className="contact-reveal mb-8 text-4xl font-black md:text-5xl lg:text-6xl">
          Let&apos;s Build Something Together
        </h2>
        <p className="contact-reveal mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Have a product, mobile app, or data project in mind? Choose your
          preferred language and start a conversation on WhatsApp.
        </p>

        <div className="contact-reveal mb-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href={whatsappLinks.english}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discuss a project in English on WhatsApp (opens in a new tab)"
            className={buttonVariants({
              size: "lg",
              className: "gap-3 px-6 py-6 text-base glow-sm",
            })}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Discuss in English
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={whatsappLinks.indonesian}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Diskusi proyek dalam Bahasa Indonesia melalui WhatsApp (membuka tab baru)"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "gap-3 border-border bg-card px-6 py-6 text-base hover:border-primary/50 hover:bg-card",
            })}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Diskusi dalam Bahasa Indonesia
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="contact-reveal">
          <p className="mb-3 text-sm text-muted-foreground">
            Prefer email instead?
          </p>
          <a
            href={`mailto:${emailAddress}`}
            className="group inline-flex items-center gap-2 font-semibold transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            {emailAddress}
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
