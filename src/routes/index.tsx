import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Truck, Package, Bike, Warehouse, ShoppingBag, Briefcase, Zap,
  Phone, MapPin, Mail, MessageCircle, Star, Menu, X, ArrowRight,
  Shield, Clock, Wallet, Headphones, CheckCircle2, Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Attaqwa Logistics",
        image: "/og.jpg",
        telephone: "+2347067745710",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ede Saka Salami Estate Road",
          addressLocality: "Ede",
          postalCode: "232102",
          addressRegion: "Osun State",
          addressCountry: "NG",
        },
        areaServed: "Nigeria",
      }),
    }],
  }),
});

const PHONE = "07067745710";
const PHONE_INTL = "2347067745710";
const WA_LINK = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent("Hello Attaqwa Logistics, I'd like to request a delivery quote.")}`;

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Track", href: "#track" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { icon: Truck, title: "Nationwide Delivery", desc: "Door-to-door delivery to every state in Nigeria with full tracking." },
  { icon: Package, title: "Cargo Transportation", desc: "Heavy & bulk cargo movement with our fleet of trucks and vans." },
  { icon: Zap, title: "Express Parcel Delivery", desc: "Same-day and next-day delivery for urgent shipments in Osun." },
  { icon: Bike, title: "Dispatch Rider Services", desc: "Fast, reliable bike riders for in-city pickups and drop-offs." },
  { icon: Warehouse, title: "Warehouse & Storage", desc: "Secure storage facilities for short and long-term holding." },
  { icon: Briefcase, title: "Business Logistics", desc: "End-to-end supply chain support for SMEs and corporates." },
  { icon: ShoppingBag, title: "E-commerce Delivery", desc: "Trusted last-mile partner for online stores and marketplaces." },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "1,500+", label: "Deliveries Completed" },
  { value: "24/7", label: "Customer Support" },
  { value: "100%", label: "Secure Handling" },
];

const reasons = [
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your schedule and meet every promised window." },
  { icon: Shield, title: "Secure Package Handling", desc: "Trained staff and tracked routes keep your items safe." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent rates with no hidden charges, ever." },
  { icon: Headphones, title: "24/7 Customer Support", desc: "Real humans, real fast — call, chat or WhatsApp anytime." },
];

const testimonials = [
  { name: "Adebayo O.", role: "E-commerce Seller, Osogbo", text: "Attaqwa has been our go-to dispatch partner for over a year. Always on time, always polite. My customers love them." },
  { name: "Fatimah A.", role: "Online Boutique Owner", text: "Their riders handle my fragile fashion items like their own. Zero damaged orders since I switched to Attaqwa." },
  { name: "Chinedu E.", role: "Wholesale Distributor", text: "Moved a full truck of goods from Lagos to Ede — arrived safely, ahead of schedule. Very professional team." },
  { name: "Mrs. Bisi", role: "Restaurant Manager", text: "Reliable, affordable and friendly. The customer service team picks calls instantly. Highly recommended." },
];

function Index() {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Toaster richColors position="top-center" />
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <WhyUs />
      <Track />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand shadow-card">
        <Truck className="h-5 w-5 text-white" strokeWidth={2.5} />
      </div>
      <div className="leading-tight">
        <div className={`font-display text-lg font-extrabold ${light ? "text-white" : "text-foreground"}`}>
          Attaqwa
        </div>
        <div className={`text-[10px] font-semibold tracking-[0.2em] ${light ? "text-white/70" : "text-muted-foreground"}`}>
          LOGISTICS
        </div>
      </div>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-card" : "bg-transparent"}`}>
      <div className="container-tight flex h-18 items-center justify-between py-3">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map(n => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <Button asChild className="bg-gradient-brand text-white shadow-card hover:opacity-95">
            <a href="#track">Get a Quote</a>
          </Button>
        </div>
        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-tight flex flex-col gap-1 py-4">
            {nav.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-secondary">
                {n.label}
              </a>
            ))}
            <a href={`tel:${PHONE}`} className="rounded-lg px-3 py-3 text-sm font-semibold text-accent">
              <Phone className="mr-2 inline h-4 w-4" />{PHONE}
            </a>
            <Button asChild className="mt-2 bg-gradient-brand text-white">
              <a href="#track">Get a Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <img src={hero} alt="Attaqwa Logistics delivery truck and dispatch rider on Nigerian highway" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="container-tight relative grid min-h-[calc(100vh-6rem)] items-center pb-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> Trusted Logistics Partner in Osun State
          </div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Fast, Reliable & <span className="text-accent">Secure Logistics</span> Services in Nigeria
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
            We deliver packages, cargo, and business logistics solutions safely and on time — across Osun State and every corner of Nigeria.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-14 bg-gradient-brand px-8 text-base font-semibold text-white shadow-elevated hover:opacity-95">
              <a href="#track">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur hover:bg-white hover:text-primary">
              <a href="#track"><Search className="mr-2 h-5 w-5" />Track Shipment</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/80">
            {["On-time delivery", "Insured handling", "Nationwide reach"].map(t => (
              <div key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" />{t}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Door-to-Door Delivery", "Same-Day Dispatch", "Nationwide Coverage", "Secure Cargo", "24/7 Support", "Real-Time Tracking"];
  return (
    <div className="overflow-hidden border-y border-border bg-primary py-4">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {it}
          </div>
        ))}
      </div>
    </div>
  );
}

function Section({ id, eyebrow, title, lead, children }: any) {
  return (
    <section id={id} className="py-24 sm:py-28">
      <div className="container-tight">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">
            {eyebrow}
          </div>
          <h2 className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">{title}</h2>
          {lead && <p className="mt-4 text-lg text-muted-foreground">{lead}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About Us" title="Nigeria's Trusted Logistics Partner" lead="Built on speed, safety and service — Attaqwa Logistics moves what matters most to you.">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <img src={g2} alt="Attaqwa Logistics workers loading delivery truck" width={800} height={800} loading="lazy" className="rounded-2xl shadow-elevated" />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-white shadow-elevated sm:block">
            <div className="font-display text-4xl font-extrabold">1,500+</div>
            <div className="text-sm text-white/70">Successful deliveries</div>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Attaqwa Logistics is a Nigerian-owned delivery and logistics company headquartered in Ede, Osun State.
            We provide reliable end-to-end logistics services across Osun and nationwide — including parcel delivery,
            cargo transportation, dispatch services, business logistics support, and fast-track delivery solutions.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From individual senders to growing businesses and e-commerce stores, our team treats every shipment as if
            it were our own. Backed by a trained workforce, modern fleet and dedicated customer service, we've built
            our reputation one safe, on-time delivery at a time.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              "On-time delivery",
              "Safe handling of goods",
              "Affordable pricing",
              "Professional service",
            ].map(item => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-secondary py-24 sm:py-28">
      <div className="container-tight">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">
            Our Services
          </div>
          <h2 className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">Complete Logistics Solutions</h2>
          <p className="mt-4 text-lg text-muted-foreground">From a single parcel to a full truckload — we've got you covered.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${i === 0 ? "lg:row-span-1" : ""}`}>
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/0 transition-all duration-500 group-hover:bg-accent/10" />
              <div className="relative">
                <div className="mb-5 inline-grid h-14 w-14 place-items-center rounded-xl bg-primary text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-gradient-brand">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a href="#track" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Request service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-white sm:py-28">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="container-tight relative">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">
            Why Choose Us
          </div>
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Built for Speed. Trusted for Safety.</h2>
        </div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(s => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur">
              <div className="font-display text-5xl font-extrabold text-accent">{s.value}</div>
              <div className="mt-2 text-sm font-medium text-white/75">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(r => (
            <div key={r.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
              <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">{r.title}</h3>
              <p className="mt-1.5 text-sm text-white/70">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Track() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    if (!name) { toast.error("Please enter your full name."); return; }
    setSubmitting(true);
    const msg = `Hello Attaqwa Logistics! I'd like a quote.\n\nName: ${fd.get("name")}\nPhone: ${fd.get("phone")}\nPickup: ${fd.get("pickup")}\nDelivery: ${fd.get("delivery")}\nType: ${fd.get("type")}\nNotes: ${fd.get("message")}`;
    window.open(`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(msg)}`, "_blank");
    setTimeout(() => { setSubmitting(false); toast.success("Quote request opened in WhatsApp."); (e.target as HTMLFormElement).reset(); }, 600);
  };
  const onTrack = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const code = String(fd.get("code") || "").trim();
    if (!code) { toast.error("Enter a tracking code."); return; }
    toast.info(`Tracking ${code}: please contact us on WhatsApp for live status.`);
  };
  return (
    <section id="track" className="py-24 sm:py-28">
      <div className="container-tight">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
          <div className="grid lg:grid-cols-5">
            <div className="relative hidden bg-gradient-hero p-10 text-white lg:col-span-2 lg:block">
              <img src={g1} alt="dispatch rider" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
              <div className="relative flex h-full flex-col">
                <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur">
                  Quote & Track
                </div>
                <h2 className="font-display text-4xl font-extrabold leading-tight">Ship smarter with Attaqwa.</h2>
                <p className="mt-3 text-white/85">Tell us about your shipment — we'll send you a quote in minutes.</p>
                <div className="mt-auto space-y-3 pt-10">
                  <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-accent" /><span className="font-semibold">{PHONE}</span></div>
                  <div className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 text-accent" /><span className="text-sm text-white/85">Ede Saka Salami Estate Road, Ede 232102, Osun State</span></div>
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:col-span-3">
              <div className="mb-6 flex gap-2 rounded-xl bg-secondary p-1">
                <a href="#quote-form" className="flex-1 rounded-lg bg-card px-4 py-2.5 text-center text-sm font-semibold text-foreground shadow-card">Request Quote</a>
                <a href="#track-form" className="flex-1 rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-muted-foreground">Track Shipment</a>
              </div>

              <form id="quote-form" onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" name="name" placeholder="John Doe" />
                  <Field label="Phone Number" name="phone" type="tel" placeholder="0801 234 5678" />
                  <Field label="Pickup Location" name="pickup" placeholder="Ede, Osun" />
                  <Field label="Delivery Location" name="delivery" placeholder="Lagos" />
                </div>
                <Field label="Shipment Type" name="type" placeholder="Parcel, cargo, documents…" />
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
                  <Textarea id="message" name="message" rows={3} placeholder="Weight, dimensions, special handling…" />
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button type="submit" disabled={submitting} className="h-12 flex-1 bg-gradient-brand px-6 text-white shadow-card hover:opacity-95">
                    {submitting ? "Sending…" : "Request Quote"} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button type="button" asChild variant="outline" className="h-12 border-primary text-primary hover:bg-primary hover:text-white">
                    <a href={WA_LINK} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp</a>
                  </Button>
                </div>
              </form>

              <div id="track-form" className="mt-10 rounded-xl border border-dashed border-border p-5">
                <Label htmlFor="code" className="text-sm font-semibold">Track Shipment</Label>
                <form onSubmit={onTrack} className="mt-2 flex gap-2">
                  <Input id="code" name="code" placeholder="Enter tracking ID (e.g. ATQ-12345)" className="h-12" />
                  <Button type="submit" className="h-12 bg-primary px-5 text-white hover:bg-primary/90"><Search className="h-4 w-4" /></Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: any) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name} className="text-sm font-semibold">{label}</Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} className="h-12" />
    </div>
  );
}

function Testimonials() {
  return (
    <section className="bg-secondary py-24 sm:py-28">
      <div className="container-tight">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">
            Testimonials
          </div>
          <h2 className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">What Our Customers Say</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map(t => (
            <figure key={t.name} className="rounded-2xl bg-card p-7 shadow-card">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed">"{t.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand font-bold text-white">{t.name[0]}</div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    { src: g1, alt: "Dispatch rider with delivery parcels" },
    { src: g2, alt: "Workers loading parcels into delivery truck" },
    { src: g3, alt: "Modern logistics warehouse" },
    { src: g4, alt: "Packaging and sorting parcels on conveyor" },
  ];
  return (
    <Section id="gallery" eyebrow="Gallery" title="Inside Our Operations" lead="A look at the people, fleet and facilities behind every Attaqwa delivery.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {imgs.map((img, i) => (
          <div key={i} className={`group relative overflow-hidden rounded-2xl shadow-card ${i === 0 ? "lg:row-span-2 lg:col-span-2 aspect-square lg:aspect-auto" : "aspect-square"}`}>
            <img src={img.src} alt={img.alt} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="container-tight">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent">
            Contact
          </div>
          <h2 className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">We're here 24/7 — reach out via call, WhatsApp, or visit our Ede office.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <ContactCard icon={Phone} title="Call Us" value={PHONE} href={`tel:${PHONE}`} accent />
            <ContactCard icon={MessageCircle} title="WhatsApp" value="Chat with us instantly" href={WA_LINK} external />
            <ContactCard icon={MapPin} title="Office Address" value="Ede Saka Salami Estate Road, Ede 232102, Osun State, Nigeria" />
            <ContactCard icon={Mail} title="Email" value="info@attaqwalogistics.ng" href="mailto:info@attaqwalogistics.ng" />
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Attaqwa Logistics location — Ede, Osun"
                src="https://www.google.com/maps?q=Ede,+Osun+State,+Nigeria&output=embed"
                width="100%" height="280" loading="lazy" className="block" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, value, href, external, accent }: any) {
  const inner = (
    <div className={`flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elevated ${accent ? "border-accent/40" : ""}`}>
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white"><Icon className="h-6 w-6" /></div>
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-0.5 font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>{inner}</a> : inner;
}

function ContactForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = `Hi Attaqwa Logistics!\n\nFrom: ${fd.get("cname")}\nEmail: ${fd.get("cemail")}\nPhone: ${fd.get("cphone")}\n\n${fd.get("cmessage")}`;
    window.open(`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Message ready — opening WhatsApp.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 shadow-card sm:p-8">
      <h3 className="font-display text-2xl font-bold text-foreground">Send us a message</h3>
      <p className="mt-1 text-sm text-muted-foreground">We'll get back to you within minutes.</p>
      <div className="mt-6 space-y-4">
        <Field label="Your Name" name="cname" placeholder="John Doe" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email" name="cemail" type="email" placeholder="you@email.com" />
          <Field label="Phone" name="cphone" type="tel" placeholder="0801 234 5678" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="cmessage" className="text-sm font-semibold">Message</Label>
          <Textarea id="cmessage" name="cmessage" rows={5} placeholder="How can we help?" required />
        </div>
        <Button type="submit" className="h-12 w-full bg-gradient-brand text-white shadow-card hover:opacity-95">
          Send Message <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-tight py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Nigeria's trusted logistics partner — fast, reliable and secure delivery across Osun State and nationwide.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-accent">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map(n => <li key={n.href}><a href={n.href} className="text-white/75 hover:text-white">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-accent">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 5).map(s => <li key={s.title} className="text-white/75">{s.title}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-accent">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Ede Saka Salami Estate Road, Ede 232102, Osun State</li>
              <li><a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4 text-accent" />{PHONE}</a></li>
              <li><a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><MessageCircle className="h-4 w-4 text-accent" />WhatsApp Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p>© 2026 Attaqwa Logistics. All Rights Reserved.</p>
          <p>Servicing Osun State & all 36 states of Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[oklch(0.7_0.17_152)] px-4 py-3 text-white shadow-elevated transition-transform hover:scale-105 animate-float"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  );
}
