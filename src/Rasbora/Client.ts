/// <reference path="../../node_modules/@types/node/index.d.ts"/>

import * as net from 'net'

import { IClient } from './IClient'

export class Client implements IClient {
  private socket: net.Socket

  private server: any
  private world: any
  private database: any

  public addr: string
  public port: number

  constructor(server: any, socket: net.Socket) {
    this.socket = socket
    this.server = server
    this.world = server.world
    this.database = server.database
    this.addr = socket.remoteAddress.split(':').pop()
  }

  public send(data: string) {
    if(this.socket) {
      this.socket.write(data + '\0')

      console.log(data)
    }
  }

  public sendError(error: number, fatal: boolean) {
    console.log(`sendError(): ${error}`)

    if(fatal) process.exit(1)
  }

  public sendXt(data: any) {
    
  }
}