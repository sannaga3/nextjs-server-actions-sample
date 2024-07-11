import { ReactNode } from "react";

export type NavItemType = {
  label: string;
  link: string;
};

export type FormProps = {
  children: ReactNode;
  handleAction: (
    state: FormState,
    formData: FormData,
    id?: number
  ) => FormState | Promise<FormState>;
  formClassProps?: string;
  modelId?: number;
  redirectTo?: string;
};

export type FormState = {
  error: string;
};

export type SubmitButtonProps = {
  color?: string;
  classProps: string;
  isPending: boolean;
};

export type EditButtonProps = {
  id: number;
};

export type DeleteButtonProps = {
  id: number;
};
