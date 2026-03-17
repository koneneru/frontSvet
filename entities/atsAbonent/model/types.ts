export interface AtsAbonent {
  id: string | bigint
  emplId: string
  name: string
  department: string
  employ: string
  internalPhone: string[]
  email: string[]
  landline: string[]
  mobilePhone: string[]
  domesticPhone: string[]
}

export interface AtsAbonentFilter {
  emplId?: string
  name?: string
}
