export interface Call {
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

export interface CallFilters {
  caller?: string
  callee?: string
  vector?: string
  gateway?: string
  calldateFrom?: Date
  calldateTo?: Date
  intercity?: boolean
}
