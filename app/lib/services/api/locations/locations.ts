import { ICreateLocation, ILocations, IUpdateLocation } from "@/app/lib/contracts/locations/locations.contract"
import api from "../api"

export const apiCreateLocation = async (data: ICreateLocation): Promise<ILocations> => {
  const response = await api.post('/locations', data)
  return response.data
}

export const apiGetLocations = async (id: string): Promise<ILocations[]> => {
  const response = await api.get(`/locations/${id}`)
  return response.data
}
export const apiUpdateLocation = async (id: string, data: IUpdateLocation): Promise<ILocations> => {
  const response = await api.put(`/locations/${id}`, data)
  return response.data
}
export const apiDeleteLocation = async (id: string): Promise<void> => {
  await api.delete(`/locations/${id}`)
}