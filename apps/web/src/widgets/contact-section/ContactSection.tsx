import { Container, Section } from "@repo/ui";

import { CallbackForm } from "@/features/callback-form";

export function ContactSection() {
  return (
    <Section id="contacts" variant="muted">
      <Container>
        <h2>Request a callback</h2>
        <CallbackForm />
      </Container>
    </Section>
  );
}
