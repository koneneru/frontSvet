export interface AtsGateway {
  id: string | bigint
  name: string
  phone: string
  interPhone: string
  trunk: string
  trunkGroup: string
  updatedAt: Date
}

export type AtsGatewayAddDTO = AtsGatewayBase & AtLeastOneField;

export interface AtsGatewayUpdateDTO {
  name: string
  phone: string
  interPhone: number
  trunk: number
  trunkGroup: number
  updatedAt: Date
}

type AtsGatewayBase = {
  name: string
  trunkGroup?: number
};

type AtLeastOneField
  = { phone: string, interPhone?: number, trunk?: number }
    | { phone?: string, interPhone: number, trunk?: number }
    | { phone?: string, interPhone?: number, trunk: number };
