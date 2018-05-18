import { Client } from '../Client'
import { BaseEvent } from './BaseEvent'

export class Navigation extends BaseEvent {

  public joinServer(packet:any, client:Client) {
    client.sendXt(['js', -1, 0, 1, (client.isModerator ? 1 : 0)])
  }

  public joinRoom(packet:any, client:Client) {

  }

  public joinPlayer(packet:any, client:Client) {

  }

}