"use client";

import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/shared/api/api-client";
import { endpoints } from "@/shared/api/endpoints";

export type Setting = {
  id: string;
  key: string;
  value: Record<string, unknown>;
};

export function useAdminSettings() {
  return useQuery({
    queryKey: ["admin", "settings"],
    queryFn: async () => {
      const response = await apiClient.get<Setting[]>(endpoints.admin.settings);
      return response.data;
    },
  });
}
