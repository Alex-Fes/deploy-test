"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./FullscreenGallery.module.scss";

export type GalleryImage = {
  alt: string;
  src: string;
};

export type FullscreenGalleryProps = {
  currentIndex: number;
  images: GalleryImage[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  open: boolean;
  renderImage?: (image: GalleryImage) => ReactNode;
};

export function FullscreenGallery({
  currentIndex,
  images,
  onClose,
  onNext,
  onPrev,
  open,
  renderImage,
}: FullscreenGalleryProps) {
  const activeImage = images[currentIndex];

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrev();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, onNext, onPrev, open]);

  if (!open || !activeImage) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay} onMouseDown={onClose}>
      <div className={styles.gallery} onMouseDown={(event) => event.stopPropagation()}>
        <button aria-label="Close gallery" className={styles.iconButton} type="button" onClick={onClose}>
          x
        </button>
        <button aria-label="Previous image" className={styles.prev} type="button" onClick={onPrev}>
          {"<"}
        </button>
        <div className={styles.image}>
          {renderImage ? renderImage(activeImage) : <img alt={activeImage.alt} src={activeImage.src} />}
        </div>
        <button aria-label="Next image" className={styles.next} type="button" onClick={onNext}>
          {">"}
        </button>
        <div className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>,
    document.body,
  );
}
