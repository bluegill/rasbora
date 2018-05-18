/// <reference path="../../node_modules/@types/node/index.d.ts"/>

export interface IClient {
  readonly addr?: string
  readonly port?: number

  send(data: string): void

  sendError(error: number, fatal: boolean): void
  sendXt(data: any): void
}