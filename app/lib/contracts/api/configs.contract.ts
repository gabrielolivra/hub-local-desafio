export interface Permission {
  id: number;
  name: string;
  subject: string;
  action: string;
}

export interface Role {
  id: number;
  name: string;
  deletedAt: string | null;
  permissions: Permission[];
}

export interface PermissionsGroupedBySubject {
  [subject: string]: Permission[];
}

export interface UpdateRoles {
  name: string;
  permissions: number[];
}

export interface CreateRole {
  name: string;
}