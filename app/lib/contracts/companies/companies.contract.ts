import { ILocations } from "../locations/locations.contract"

export interface ICreateCompany {
  name: string,
  website: string,
  cnpj: string
}

export interface IUpdateCompany {
  name: string,
  website: string,
  cnpj: string
}

export interface ICompany {
  id: string
  name: string
  website: string
  cnpj: string
  location: ILocations[]
}