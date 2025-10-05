import { ContactForm } from "../../Components";
import { InfoCard } from "../../Components";
import { Card, CardContent } from "../../Components";
import { Separator } from "../../Components/ui/separator";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../../Components/ui/accordion";
import Container from "../../Components/Container";

export default function ContactPage() {
  return (
    <Container>
      <main className="mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <header className="mb-6 text-center">
          {/* Overline */}
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm text-muted-foreground">
            Have questions about our gallery, exhibitions, or artwork? We&apos;d
            love to hear from you.
          </p>
        </header>

        {/* Subtle divider */}
        <Separator className="my-8" />

        {/* Quick facts */}
        <section
          aria-label="Support quick facts"
          className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
        >
          <div className="rounded-md border p-3 text-center">
            <p className="text-xs text-muted-foreground">Average Response</p>
            <p className="text-sm font-medium">Under 24 hours</p>
          </div>
          <div className="rounded-md border p-3 text-center">
            <p className="text-xs text-muted-foreground">Support Hours</p>
            <p className="text-sm font-medium">Mon–Fri · 9:00–18:00</p>
          </div>
          <div className="rounded-md border p-3 text-center">
            <p className="text-xs text-muted-foreground">Consultations</p>
            <p className="text-sm font-medium">By appointment</p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left: Contact form spans 2 columns on desktop */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>

          {/* Right: Info cards — sticky on desktop */}
          <aside className="space-y-4 md:sticky md:top-24">
            <InfoCard title="Visit Us">
              <div className="text-sm text-muted-foreground">
                <p>1234 Street Name City</p>
                <p>AA 10002</p>
                <p>United States</p>
              </div>
            </InfoCard>

            <InfoCard title="Call Us">
              <div className="text-sm text-muted-foreground">
                <p>Phone: +1 (800) 000-0001</p>
                <p>Mobile: +1 (800) 000-0002</p>
              </div>
            </InfoCard>

            <InfoCard title="Email Us">
              <div className="text-sm text-muted-foreground">
                <p>General: support@example.com</p>
                <p>Sales: sales@example.com</p>
              </div>
            </InfoCard>

            <InfoCard title="Gallery Hours">
              <div className="text-sm text-muted-foreground">
                <p>Mon - Fri: 10:00 AM - 6:00 PM</p>
                <p>Saturday: 11:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </InfoCard>
          </aside>
        </section>

        {/* Private viewing card remains */}
        <section className="mt-10">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-medium">
                Private Viewing &amp; Consultations
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Interested in scheduling a private viewing or a consultation? We
                offer personalized experiences for serious collectors and art
                enthusiasts. Contact us to arrange an appointment with one of
                our specialists. For press inquiries, partnerships, or special
                collaborations, please indicate your interest in the subject
                line of your message.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Monochrome FAQ */}
        {/* <section className="mt-10">
          <div className="rounded-lg border">
            <div className="border-b p-6">
              <h2 className="text-lg font-medium">
                Frequently Asked Questions
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Find quick answers to common questions before reaching out.
              </p>
            </div>
            <div className="p-2 sm:p-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    What is your typical response time?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    We aim to reply within one business day. During peak
                    exhibition periods, it may take slightly longer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    Do you offer private consultations?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Yes—private viewings and consultations are available by
                    appointment. Mention it in your message and we&apos;ll
                    arrange a time.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    Where are you located?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    We&apos;re in the city center at the address listed above.
                    Parking and public transit are both convenient options.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section> */}
      </main>
    </Container>
  );
}
