import { Button, Container, Section } from "@repo/ui";
import styles from "./HeroSection.module.scss";

export function HeroSection() {
  return (
    <Section variant="hero">
      <Container className={styles.container}>
        <h1>Landing starter for service websites</h1>
        <p>Next.js frontend, NestJS backend, PostgreSQL persistence, admin-ready architecture.</p>
        <a href="#contacts">
          <Button>Request callback</Button>
        </a>
      </Container>
    </Section>
  );
}
