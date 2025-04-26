import api from '../api';

export async function getUserPermissions() {
  const permission = await api.get('/auth/permissions');
  return permission.data;
}
