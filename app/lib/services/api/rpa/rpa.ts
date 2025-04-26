import { ApiDefaultPaginationResponse } from "@/app/lib/contracts/api/paginate-response.contract";
import { IRpa, IRpaCreate } from "@/app/lib/contracts/api/rpa/rpa.contract";
import { PaginateContract } from "@/app/lib/contracts/paginate.contract";
import api from "../api";

export async function apiGetRpa(props: {
  paginate: PaginateContract;
}): Promise<ApiDefaultPaginationResponse<IRpa>> {
  const paginate = props.paginate.mountQueryPaginationString();
  const searchParams = props.paginate.mountQuerySearchAndFilterString();
  const rpa = await api.get(`/utilities/rpa?${paginate}&${searchParams}`);
  return rpa.data
}

export async function apiPutRpa(id: string, rpa: IRpa): Promise<void> {
  const rpaUpdated = await api.put(`/utilities/rpa/${id}`, rpa);
  return rpaUpdated.data
}

export async function apiPostRpa(rpa: IRpaCreate): Promise<void> {
  const rpaCreated = await api.post(`/utilities/rpa`, rpa);
  return rpaCreated.data
}
