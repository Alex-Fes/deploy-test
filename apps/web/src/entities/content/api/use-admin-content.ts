"use client";

import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/shared/api/api-client";
import { endpoints } from "@/shared/api/endpoints";

export type ContentBlock = {
  content: Record<string, unknown>;
  id: string;
  isActive: boolean;
  key: string;
  title: string | null;
};

export function useAdminContent() {
  return useQuery({
    queryKey: ["admin", "content"],
    queryFn: async () => {
      const response = await apiClient.get<ContentBlock[]>(endpoints.admin.content);
      return response.data;
    },
  });
}
