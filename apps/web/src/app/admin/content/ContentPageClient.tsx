"use client";

import { ErrorState, Skeleton } from "@repo/ui";

import { useAdminContent } from "@/entities/content/api/use-admin-content";

export function ContentPageClient() {
  const content = useAdminContent();

  if (content.isLoading) {
    return <Skeleton style={{ minHeight: 160 }} />;
  }

  if (content.isError) {
    return <ErrorState title="Could not load content" />;
  }

  return (
    <pre>{JSON.stringify(content.data ?? [], null, 2)}</pre>
  );
}
