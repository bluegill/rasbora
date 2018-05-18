/// <reference path="../../node_modules/@types/node/index.d.ts"/>

import * as net from 'net'

import { Server } from './Server'
import { Client } from './Client'

export class World {
  constructor(server: any) { }

  public getTables(packet:any, client:Client) { }
  public joinTable(packet:any, client:Client) { }
  public leaveTable(packet:any, client:Client) { }

  public getBuddies(packet:any, client:Client) { }
  public sendBuddyRequest(packet:any, client:Client) { }
  public sendBuddyRemove(packet:any, client:Client) { }
  public acceptBuddy(packet:any, client:Client) { }
  public findBuddy(packet:any, client:Client) { }

  public getAgentStatus(packet:any, client:Client) { }
  public setAgentStatus(packet:any, client:Client) { }
  public getFieldStatus(packet:any, client:Client) { }
  public setFieldStatus(packet:any, client:Client) { }
  public getAgentRank(packet:any, client:Client) { }
  public purchaseSpyGear(packet:any, client:Client) { }

  public getActiveIgloo(packet:any, client:Client) { }
  public openIgloo(packet:any, client:Client) { }
  public closeIgloo(packet:any, client:Client) { }
  public getOwnedIgloos(packet:any, client:Client) { }
  public getFurnitureList(packet:any, client:Client) { }
  public saveIglooFurniture(packet:any, client:Client) { }
  public updateIglooMusic(packet:any, client:Client) { }
  public sendServerIglooList(packet:any, client:Client) { }
  public buyIglooFloor(packet:any, client:Client) { }
  public buyIglooType(packet:any, client:Client) { }
  public buyFurniture(packet:any, client:Client) { }
  public updateIglooType(packet:any, client:Client) { }

  public getInventory(packet:any, client:Client) { }
  public buyInventory(packet:any, client:Client) { }
  public getPlayerPins(packet:any, client:Client) {}
  public getPlayerAwards(packet:any, client:Client) { }

  public joinServer(packet:any, client:Client) { }
  public joinRoom(packet:any, client:Client) { }
  public joinPlayer(packet:any, client:Client) { }

  public startMail(packet:any, client:Client) { }
  public getMail(packet:any, client:Client) { }
  public mailChecked(packet:any, client:Client) { }
  public sendMail(packet:any, client:Client) { }
  public deleteMail(packet:any, client:Client) { }
  public deleteMailPlayer(packet:any, client:Client) { }

  public sendMessage(packet:any, client:Client) { }

  public getIgnores(packet:any, client:Client) { }

  public getNinjaRank(packet:any, client:Client) { }
  public getNinjaLevel(packet:any, client:Client) { }
  public getWaterLevel(packet:any, client:Client) { }
  public getFireLevel(packet:any, client:Client) { }
  public getCardData(packet:any, client:Client) { }

  public kickPlayer(packet:any, client:Client) { }
  public mutePlayer(packet:any, client:Client) { }


  public getPuffles(packet:any, client:Client) { }
  public getPlayerPuffles(packet:any, client:Client) { }
  public sendAdoptPuffle(packet:any, client:Client) { }
  public sendPuffleTreat(packet:any, client:Client) { }
  public sendPuffleFeed(packet:any, client:Client) { }
  public sendPuffleRest(packet:any, client:Client) { }
  public sendPufflePlay(packet:any, client:Client) { }
  public sendPuffleBath(packet:any, client:Client) { }
  public sendPuffleFrame(packet:any, client:Client) { }
  public sendPuffleWalk(packet:any, client:Client) { }
  public sendPuffleMove(packet:any, client:Client) { }

  public sendPuffleInitInteractionPlay(packet:any, client:Client) { }
  public sendPuffleInitInteractionRest(packet:any, client:Client) { }
  public sendPuffleInteractionRest(packet:any, client:Client) { }
  public sendPuffleInteractionPlay(packet:any, client:Client) { }

  public coinsDigUpdate(packet:any, client:Client) { }

  public updatePlayerClothing(packet:any, client:Client) { }

  public getStamps(packet:any, client:Client) { }
  public addStamp(packet:any, client:Client) { }
  public getRecentStamps(packet:any, client:Client) { }
  public getBookCover(packet:any, client:Client) { }
  public updateBookCover(packet:any, client:Client) { }

  public openPlayerBook(packet:any, client:Client) { }
  public closePlayerBook(packet:any, client:Client) { }

  public sendHeartbeat(packet:any, client:Client) { }
  public sendEmote(packet:any, client:Client) { }
  public sendSafeChat(packet:any, client:Client) { }
  public sendTourMessage(packet:any, client:Client) { }
  public sendPosition(packet:any, client:Client) { }
  public sendSnowball(packet:any, client:Client) { }
  public sendFrame(packet:any, client:Client) { }
  public sendAction(packet:any, client:Client) { }
  public sendLine(packet:any, client:Client) { }
  public sendJoke(packet:any, client:Client) { }
  public sendLastRevision(packet:any, client:Client) { }
  public getPlayer(packet:any, client:Client) { }
  public sendMascotMessage(packet:any, client:Client) { }

  public joinWaddle(packet:any, client:Client) { }
}