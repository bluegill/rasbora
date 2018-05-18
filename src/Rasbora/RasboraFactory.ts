/// <reference path="../../node_modules/@types/node/index.d.ts"/>

import * as net from 'net'

import { Server } from './Server'
import { Client } from './Client'

export class RasboraFactory {
  private server: net.Server
  private emitter: any

  private port: number
  private id: number
  private type: string
  private maxClients: number

  private clients: Array<any>

  private client: Client

  constructor(options: any) {
    if(!options) process.exit(1)

    this.port = (!options.port ? 9875 : options.port)
    this.id = (!options.id ? 100 : options.id)
    this.type = (options.server.toLowerCase() !== 'login' ? 'world' : options.server)
  }

  public start() {
    console.log('[FACTORY] Starting...')

    this.server = net.createServer()
    this.emitter = new Server()

    this.bindEvents(this.server)
  }

  private bindEvents(server: net.Server) {
    server.on('connection', this.handleServerConnection)
    server.on('data', this.handleServerData)
    server.on('close', this.handleServerClose)
    server.on('error', this.handleServerError)

    this.createListener()
  }

  private createListener() {
    this.server.getConnections((error, count) => {
      if(count > 0) this.server.close()

      this.server.listen(this.port, () => {
        console.log(`Server now listening on port ${this.port}`)
      })
    })
  }

  private handleServerConnection = (connection: net.Socket) => {
    connection.setEncoding('utf8')

    this.client = new Client(this, connection)

    if(this.clients.length > this.maxClients) {
      this.client.sendError(103, true)
    }

    this.clients.push(this.client)

    let remoteAddress = connection.remoteAddress + ':' + connection.remotePort

    console.log(`New client connected from: ${remoteAddress}`)
  }

  private handleServerData = (data: String, client: any) => {
    data = data.toString().split('\0')[0]

    const isXML = (data.charAt(0) == '<')

    if(isXML) {
      if(data.indexOf('policy-file-request') > -1) {
        return client.send(`<cross-domain-policy><allow-access-from domain='*' to-ports='*' /></cross-domain-policy>`)
      }

      let action = data.split('action=\'')[1].split('\' r=')[0]
    }


  }

  private handleServerClose = () => {
    console.log('Client has disconnected')
  }

  private handleServerError = (error: any) => {
    if(error.code === 'EADDRINUSE') {
      console.log(`Port ${this.port} is in use; retrying connection...`)

      return setTimeout(() => {
        this.createListener()
      }, 5000)
    }

    console.log(error.message)
  }
}