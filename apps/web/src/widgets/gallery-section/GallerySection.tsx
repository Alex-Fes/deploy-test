"use client";

import { Button, Container, FullscreenGallery, Section, type GalleryImage } from "@repo/ui";
import { useState } from "react";

const images: GalleryImage[] = [
  { src: "/images/gallery-placeholder-1.jpg", alt: "Gallery placeholder 1" },
  { src: "/images/gallery-placeholder-2.jpg", alt: "Gallery placeholder 2" },
  { src: "/images/gallery-placeholder-3.jpg", alt: "Gallery placeholder 3" },
];

export function GallerySection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (nextIndex: number) => {
    setIndex(nextIndex);
    setOpen(true);
  };

  return (
    <Section id="gallery">
      <Container>
        <h2>Gallery</h2>
        <div>
          {images.map((image, imageIndex) => (
            <Button key={image.src} variant="secondary" onClick={() => openAt(imageIndex)}>
              {image.alt}
            </Button>
          ))}
        </div>
        <FullscreenGallery
          currentIndex={index}
          images={images}
          open={open}
          onClose={() => setOpen(false)}
          onNext={() => setIndex((value) => (value + 1) % images.length)}
          onPrev={() => setIndex((value) => (value === 0 ? images.length - 1 : value - 1))}
        />
      </Container>
    </Section>
  );
}
