"use client";

import { Button, ErrorState, Skeleton } from "@repo/ui";

import { useAdminLeads, useUpdateLeadStatus } from "@/entities/lead/api/use-admin-leads";
import styles from "../Admin.module.scss";

export function LeadsPageClient() {
  const leads = useAdminLeads();
  const updateStatus = useUpdateLeadStatus();

  if (leads.isLoading) {
    return <Skeleton style={{ minHeight: 180 }} />;
  }

  if (leads.isError) {
    return <ErrorState title="Could not load leads" />;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {(leads.data ?? []).map((lead) => (
          <tr key={lead.id}>
            <td>{lead.name}</td>
            <td>{lead.phone}</td>
            <td>{lead.status}</td>
            <td>
              <Button
                loading={updateStatus.isPending}
                variant="secondary"
                onClick={() => updateStatus.mutate({ id: lead.id, status: "done" })}
              >
                Mark done
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
