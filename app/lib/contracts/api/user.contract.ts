import { Role } from "./configs.contract";

export class UserApiContract {
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  isActive: boolean = true;
  activeAzureAuthenticate?: boolean;
  apiKey?: string;
  hiddenApiKey?: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  roles: Role[] | null = null;
}

export interface UpdateUser {
  email?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  isActive?: boolean;
  password?: string;
  activeAzureAuthenticate?: boolean;
  roles?: number[];
}

export interface RegisterUser {
  firstName: string;
  username: string;
  lastName?: string;
  email: string;
  password?: string;
  activeAzureAuthenticate?: boolean;
  roles: number[];
}