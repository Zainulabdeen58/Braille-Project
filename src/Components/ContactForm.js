import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";
import { Spinner } from "./ui/spinner";

export function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honey: "", // honeypot
  });

  const messageLimit = 1000;
  // const charsLeft = useMemo(
  //   () => Math.max(0, messageLimit - form.message.length),
  //   [form.message]
  // );

  async function onSubmit(e) {
    e.preventDefault();
    // Basic spam guard: if honeypot has content, exit silently
    if (form.honey.trim().length > 0) {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Failed to send message");
      setForm({ name: "", email: "", subject: "", message: "", honey: "" });
      toast({
        title: "Message sent",
        description: "Thanks! We’ll get back to you soon.",
      });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: err.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <Card className="transition-shadow hover:shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Send Us a Message</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <form onSubmit={onSubmit} className="space-y-4" aria-live="polite">
          {/* Honeypot (hidden to users) */}
          <div className="hidden" aria-hidden="true">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              value={form.honey}
              onChange={(e) => update("honey", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Your full name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Jane Doe"
              required
              autoComplete="name"
            />
            <p className="text-xs text-muted-foreground">
              Please enter your first and last name.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
              inputMode="email"
            />
            <p className="text-xs text-muted-foreground">
              We&apos;ll only use this to reply to your message.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
              placeholder="What is this regarding?"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Tell us more about your inquiry..."
              rows={6}
              required
              aria-describedby="message-help message-count"
              maxLength={messageLimit}
            />
            <div className="flex items-center justify-between">
              <p id="message-help" className="text-xs text-muted-foreground">
                Include any helpful links or preferred times for a reply.
              </p>
              <p id="message-count" className="text-xs text-muted-foreground">
                {form.message.length}/{messageLimit}
              </p>
            </div>
          </div>

          <div>
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <span className="inline-flex items-center">
                  <Spinner className="mr-2 h-4 w-4" />
                  Sending…
                </span>
              ) : (
                "Send Message"
              )}
            </Button>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              By submitting, you agree to be contacted about your request.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
