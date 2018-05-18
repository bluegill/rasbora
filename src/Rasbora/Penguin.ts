/// <reference path="../../node_modules/@types/node/index.d.ts"/>

import { Client } from './Client'
import { IPenguin } from './IPenguin'

export class Penguin extends Client implements IPenguin {
  public id: number
  public username: string
  public nickname: string

  public coins: number

  private color: number
  private head: number
  private face: number
  private neck: number
  private body: number
  private hand: number
  private feet: number
  private flag: number
  private photo: number

  private rank: number

  private igloo: Array<number>

  private age: number

  public x: number
  public y: number

  public room: any

  public isModerator: Boolean

  public setClient(object: any) {
    this.id = object.id
    this.username = object.username
    this.nickname = object.nickname

    this.coins = object.coins
    this.head = object.head
    this.neck = object.neck
    this.face = object.face
  }
}