import { Accordion, Container, Section } from "@repo/ui";

export function FaqSection() {
  return (
    <Section id="faq">
      <Container>
        <h2>FAQ</h2>
        <Accordion
          items={[
            {
              id: "admin",
              title: "Is admin included?",
              content: "The starter includes admin-ready API and routes.",
            },
            {
              id: "mail",
              title: "How do forms work?",
              content: "Forms create leads through the API and send notifications through MailModule.",
            },
          ]}
        />
      </Container>
    </Section>
  );
}
