import { ApiDefaultPaginationResponse } from '../../contracts/api/paginate-response.contract';
import { UserApiContract } from '../../contracts/api/user.contract';
import { PaginateContract } from '../../contracts/paginate.contract';
import api from './api';

export const apiGetUsers = async ({
  paginate,
}: {
  paginate: PaginateContract;
}): Promise<ApiDefaultPaginationResponse<UserApiContract>> => {
  const queryString = paginate.mountQuerySearchAndFilterString();
  const queryPaginate = paginate.mountQueryPaginationString();

  const response = await api.get(`/users?${queryString}&${queryPaginate}`);
  return response.data;
};

export const apiGetUser = async (id: string): Promise<UserApiContract> => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};
