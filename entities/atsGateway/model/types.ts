export interface Gateway {
  id: string | bigint
  name: string
  phone: string
  interPhone: string
  trunk: string
  trunkGroup: string
  updatedAt: Date
}

export type GatewayCreateDTO = GatewayBase & AtLeastOneField;

export interface GatewayUpdateDTO {
  name: string
  phone: string
  interPhone: number
  trunk: number
  trunkGroup: number
  updatedAt: Date
}

type GatewayBase = {
  name: string
  trunkGroup?: number
};

type AtLeastOneField
  = { phone: string, interPhone?: number, trunk?: number }
    | { phone?: string, interPhone: number, trunk?: number }
    | { phone?: string, interPhone?: number, trunk: number };
