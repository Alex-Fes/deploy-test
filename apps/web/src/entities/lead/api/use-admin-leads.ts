"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { apiClient } from "@/shared/api/api-client";
import { endpoints } from "@/shared/api/endpoints";

export type LeadStatus = "new" | "in_progress" | "done" | "spam";

export type AdminLead = {
  createdAt: string;
  email: string | null;
  id: string;
  message: string | null;
  name: string;
  phone: string;
  sourcePage: string | null;
  status: LeadStatus;
};

export function useAdminLeads() {
  return useQuery({
    queryKey: ["admin", "leads"],
    queryFn: async () => {
      const response = await apiClient.get<AdminLead[]>(endpoints.admin.leads);
      return response.data;
    },
  });
}

export function useUpdateLeadStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, status }: { id: string; status: LeadStatus }) => {
      const response = await apiClient.patch<AdminLead>(`${endpoints.admin.leads}/${id}/status`, { status });
      return response.data;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["admin", "leads"] });
    },
  });
}
