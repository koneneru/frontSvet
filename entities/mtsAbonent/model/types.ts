export interface Abonent {
  id: string | bigint
  emplName: string
  emplId: string
  department: string
  state: boolean
  updatedAt: Date
}

export type AbonentCreateDTO = Omit<Abonent, 'id' | 'updatedAt'>;

export interface AbonentUpdateDTO {
  emplName?: string
  emplId?: string
  department?: string
  state?: boolean
  updatedAt: Date
}

export interface AbonentFilter extends Record<string, string | undefined> {
  emplId?: string
  emplName?: string
  department?: string
  state?: '0' | '1'
}
