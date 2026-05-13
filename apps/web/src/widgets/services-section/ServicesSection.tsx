import { Container, Section, StickySplitSection } from "@repo/ui";


export function ServicesSection() {
  return (
    <Section id="services">
      <Container>
        <StickySplitSection
          left={
            <div>
              <h2>Services</h2>
              <p>Use this area for long-form service copy, benefits, process, prices, or content blocks.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
              <p>The right column can stay sticky on desktop and collapse on mobile.</p>
            </div>
          }
          right={
            <div>
              <h3>Sticky panel</h3>
              <p>Image, form, price card, or navigation can live here.</p>
            </div>
          }
        />
      </Container>
    </Section>
  );
}
