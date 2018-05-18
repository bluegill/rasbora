/// <reference path="../../node_modules/@types/node/index.d.ts"/>

export interface IPenguin {
  readonly id: number

  username: string
  nickname: string

  coins: number

  x?: number
  y?: number

  room?: any

  isModerator?: Boolean

  setClient(object: any): void
}