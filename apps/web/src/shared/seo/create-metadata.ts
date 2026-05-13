import type { Metadata } from "next";

import { siteConfig } from "./site-config";

export function createMetadata(options: Partial<Metadata> = {}): Metadata {
  const title = options.title ?? siteConfig.title;
  const description = options.description ?? siteConfig.description;

  return {
    ...options,
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: String(title),
      description: String(description),
      siteName: siteConfig.name,
      type: "website",
      ...options.openGraph,
    },
  };
}
