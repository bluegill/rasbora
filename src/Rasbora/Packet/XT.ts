import { IPacket } from './IPacket'

export class XT implements IPacket {
  parse(data: string) {
    console.log(data)
  }
}