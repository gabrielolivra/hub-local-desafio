'use server';
import { array, boolean, string, z } from 'zod';
import { callApiWithAuthentication } from '../../auth';
import { apiCreateUser } from '../../services/api/settings/settings';
import { AxiosError } from 'axios';
import { handlerBadRequestError } from '../../services/api/api';
import { utilsHelper } from '../../helpers/utils.helper';
import { RegisterUser } from '../../contracts/api/user.contract';

const FormSchema = z.object({
  firstName: string().min(1, { message: 'Digite o primeiro nome!' }),
  lastName: string().optional(),
  username: string().min(1, { message: 'Digite o nome do usuario!' }),
  email: string().min(1, { message: 'Digite o email!' }),
  roles: array(string()).min(1, { message: 'Selecione a role!' }),
  password: string().optional(),
  activeAzureAuthenticate: boolean().optional(),
});

const formUser = FormSchema.omit({});

export type State = {
  errors?: {
    firstName?: string[] | undefined;
    username?: string[] | undefined;
    email?: string[] | undefined;
    password?: string[] | undefined;
    roles?: string[] | undefined;
  };
  message?: string | null | undefined;
  data?: {
    id?: string | undefined;
    firstName?: string | undefined;
    username?: string | undefined;
    email?: string | undefined;
    password?: string | string | undefined;
    roles?: string[] | undefined;
    lastName?: string | undefined;
    activeAzureAuthenticate?: boolean | undefined;
  };
  send?: { status: boolean; type: string };
};

export async function createUserAction(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const payload = {
    firstName: formData.get('firstName')?.toString(),
    username: formData.get('username')?.toString(),
    email: formData.get('email')?.toString(),
    password: formData.get('password')?.toString(),
    roles: formData.getAll('checked_roles').map((role) => role.toString()),
    lastName: formData.get('lastName')?.toString(),
    activeAzureAuthenticate: formData.get('activeAzureAuthenticate') === 'on' ? true : false,
  };

  const validatedData = formUser.safeParse(payload);

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: 'Campos faltantes ou inválidos',
      data: payload,
    };
  }
  try {
    const createUserPayload: RegisterUser = {
      firstName: validatedData.data.firstName,
      username: validatedData.data.username,
      email: validatedData.data.email,
      password: validatedData.data.password,
      roles: validatedData.data.roles.map((role) => parseInt(role)),
      lastName: validatedData.data.lastName,
      activeAzureAuthenticate: validatedData.data.activeAzureAuthenticate
    };

    await callApiWithAuthentication(apiCreateUser)(utilsHelper.objectRemoveEmptyValues(createUserPayload));
  } catch (error) {
    const errorResponse = error as unknown as AxiosError;
    return { message: handlerBadRequestError(errorResponse), data: payload };
  }
  return { send: { status: true, type: 'create' } };
}
