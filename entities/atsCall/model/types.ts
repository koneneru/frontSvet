export interface AtsCall {
  id: string | bigint
  caller: string
  callerName: string
  gateway: string
  gatewayName: string
  calldate: Date
  duration: number
  vector: string
  callee: string
  calleeName: string
}

export interface AtsCallFilters {
  caller?: string
  callee?: string
  direction?: string
  gateway?: string
  dateFrom?: string
  dateTo?: string
  intercity?: boolean
}
