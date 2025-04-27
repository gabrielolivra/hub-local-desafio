import { ICompany, ICreateCompany } from "@/app/lib/contracts/companies/companies.contract"
import api from "../api"
import { IUpdateLocation } from "@/app/lib/contracts/locations/locations.contract"

export const apiCreateCompany = async (data: ICreateCompany): Promise<ICompany> => {
  const response = await api.post('/company', { data })
  return response.data
}

export const apiGetCompanies = async (): Promise<ICompany[]> => {
  const response = await api.get('/company')
  return response.data
}

export const apiUpdateCompany = async (id: string, data: IUpdateLocation): Promise<ICompany> => {
  const response = await api.put(`/company/${id}`, { data })
  return response.data
}

export const apiDeleteCompany = async (id: string): Promise<void> => {
  await api.delete(`/company/${id}`)
}