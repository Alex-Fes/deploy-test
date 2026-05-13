import { apiClient } from "@/shared/api/api-client";
import { endpoints } from "@/shared/api/endpoints";

export type CreateLeadInput = {
  email?: string;
  message?: string;
  name: string;
  phone: string;
  sourcePage?: string;
};

export type CreateLeadResponse = {
  id: string;
  status: "accepted";
};

export const leadsApi = {
  async createLead(input: CreateLeadInput) {
    const response = await apiClient.post<CreateLeadResponse>(endpoints.leads, input);
    return response.data;
  },
};
