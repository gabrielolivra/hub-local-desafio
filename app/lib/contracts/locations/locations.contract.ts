export interface ILocations {
  id: string
  name: string
  cep: string
  bulevar: string
  number: string,
  district: string
  city: string
  state: string
  company: {
    id: string
    name: string
    website: string
    cnpj: string
  }
}

export interface ICreateLocation {
  name: string
  cep: string
  bulevar: string
  number: string
  district: string
  city: string
  state: string
  companyId: string
}

export interface IUpdateLocation {
  name: string
  cep: string
  bulevar: string
  number: string
  district: string
  city: string
  state: string
}