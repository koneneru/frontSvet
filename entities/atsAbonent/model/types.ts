export interface Abonent {
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

export interface AbonentFilter extends Record<string, string | undefined> {
  emplId?: string
  name?: string
}
