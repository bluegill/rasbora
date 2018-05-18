import { IPacket } from './IPacket'

export class XML implements IPacket {
  parse(data: string) {
    console.log(data)
  }
}