"use client";

import { ErrorState, Skeleton } from "@repo/ui";

import { useAdminSettings } from "@/entities/settings/api/use-admin-settings";

export function SettingsPageClient() {
  const settings = useAdminSettings();

  if (settings.isLoading) {
    return <Skeleton style={{ minHeight: 160 }} />;
  }

  if (settings.isError) {
    return <ErrorState title="Could not load settings" />;
  }

  return <pre>{JSON.stringify(settings.data ?? [], null, 2)}</pre>;
}
