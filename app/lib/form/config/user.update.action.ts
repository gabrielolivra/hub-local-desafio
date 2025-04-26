'use server';
import { array, boolean, string, z } from 'zod';
import { callApiWithAuthentication } from '../../auth';
import { apiUpdateUser } from '../../services/api/settings/settings';
import { AxiosError } from 'axios';
import { handlerBadRequestError } from '../../services/api/api';
import { utilsHelper } from '../../helpers/utils.helper';
import { UpdateUser } from '../../contracts/api/user.contract';

const FormSchema = z.object({
  id: string(),
  firstName: string().min(1, { message: 'Digite o primeiro nome!' }),
  lastName: string().optional(),
  username: string().min(1, { message: 'Digite o nome do usuario!' }),
  email: string().min(1, { message: 'Digite o email!' }),
  roles: array(string()).min(1, { message: 'Selecione a role!' }),
  active: boolean().optional(),
  activeAzureAuthenticate: boolean().optional(),
  password: string().optional(),
});

const formUser = FormSchema.omit({ id: true });

export type StateUpdate = {
  errors?: {
    firstName?: string[] | undefined;
    username?: string[] | undefined;
    email?: string[] | undefined;
    roles?: string[] | undefined;
  };
  message?: string | null | undefined;
  data?: {
    id?: string | undefined;
    firstName?: string | undefined;
    username?: string | undefined;
    email?: string | undefined;
    roles?: string[] | undefined;
    active?: boolean | undefined;
    lastName?: string | undefined;
    activeAzureAuthenticate?: boolean | undefined;
  };
  send?: { status: boolean; type: string };
};
export async function updateUserAction(
  id: string,
  prevState: StateUpdate,
  formData: FormData,
): Promise<StateUpdate> {
  const payload = {
    firstName: formData.get('firstName')?.toString(),
    username: formData.get('username')?.toString(),
    email: formData.get('email')?.toString(),
    roles: formData.getAll('checked_roles').map(role => role.toString()),
    lastName: formData.get('lastName')?.toString(),
    active: formData.get('active') === 'on' ? true : false,
    password: formData.get('password')?.toString(),
    activeAzureAuthenticate: formData.get('activeAzureAuthenticate')?.toString() === 'on' ? true : false,
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
    const updateUserPayload: UpdateUser = {
      firstName: validatedData.data.firstName,
      username: validatedData.data.username,
      email: validatedData.data.email,
      roles: validatedData.data.roles.map(id => parseInt(id)),
      password: validatedData.data.password,
      isActive: validatedData.data.active,
      lastName: validatedData.data.lastName,
      activeAzureAuthenticate: validatedData.data.activeAzureAuthenticate,
    };

    await callApiWithAuthentication(apiUpdateUser)({
      id,
      data: utilsHelper.objectRemoveEmptyValues(updateUserPayload),
    });
  } catch (error) {
    const errorResponse = error as unknown as AxiosError;

    return { message: handlerBadRequestError(errorResponse), data: payload };
  }
  return { send: { status: true, type: 'update' } };
}
