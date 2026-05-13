"use client";

import { Button, Field, Input, Textarea, useToast } from "@repo/ui";
import type { FormEvent } from "react";
import { useState } from "react";

import { normalizeApiError } from "@/shared/api/api-error";
import { useCreateLead } from "../api/use-create-lead";

type FormState = {
  email: string;
  message: string;
  name: string;
  phone: string;
};

const initialState: FormState = {
  email: "",
  message: "",
  name: "",
  phone: "",
};

export function CallbackForm() {
  const [values, setValues] = useState(initialState);
  const toast = useToast();
  const createLead = useCreateLead();

  const update = (key: keyof FormState, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!values.name.trim() || !values.phone.trim()) {
      toast.error("Fill in name and phone");
      return;
    }

    try {
      await createLead.mutateAsync({
        ...values,
        sourcePage: "/",
      });
      setValues(initialState);
      toast.success("Request sent");
    } catch (error) {
      toast.error(normalizeApiError(error).message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Field label="Name">
        <Input value={values.name} onChange={(event) => update("name", event.target.value)} />
      </Field>
      <Field label="Phone">
        <Input value={values.phone} onChange={(event) => update("phone", event.target.value)} />
      </Field>
      <Field label="Email">
        <Input type="email" value={values.email} onChange={(event) => update("email", event.target.value)} />
      </Field>
      <Field label="Message">
        <Textarea value={values.message} onChange={(event) => update("message", event.target.value)} />
      </Field>
      <Button loading={createLead.isPending} type="submit">
        Send request
      </Button>
    </form>
  );
}
