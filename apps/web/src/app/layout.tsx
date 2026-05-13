import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.scss";
import { Providers } from "./providers";
import { createMetadata } from "@/shared/seo/create-metadata";

export const metadata: Metadata = createMetadata();

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
