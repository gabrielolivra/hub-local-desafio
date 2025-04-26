export interface IFormActionState {
  errors?: Record<string, string[] | undefined>;
  message?: string | null | undefined;
  data?: Record<string, string | number | undefined>;
  send?: boolean;
}

export type IFormAction = (
  state: IFormActionState,
  formData: FormData,
) => Promise<IFormActionState>;
export type IFormUpdateAction = (
  id: string,
  state: IFormActionState,
  formData: FormData,
) => Promise<IFormActionState>;
