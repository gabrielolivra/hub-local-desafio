import { ICreateLocation, ILocations, IUpdateLocation } from "@/app/lib/contracts/locations/locations.contract"
import api from "../api"

export const apiCreateLocation = async (data: ICreateLocation): Promise<ILocations> => {
  const response = await api.post('/location', data)
  return response.data
}

export const apiGetLocations = async (): Promise<ILocations[]> => {
  const response = await api.get('/location')
  return response.data
}
export const apiUpdateLocation = async (id: string, data: IUpdateLocation): Promise<ILocations> => {
  const response = await api.put(`/location/${id}`, data)
  return response.data
}
export const apiDeleteLocation = async (id: string): Promise<void> => {
  await api.delete(`/location/${id}`)
}