"use client";

import { useMutation } from "@tanstack/react-query";

import { leadsApi, type CreateLeadInput } from "@/entities/lead/api/leads-api";

export function useCreateLead() {
  return useMutation({
    mutationFn: (input: CreateLeadInput) => leadsApi.createLead(input),
  });
}
