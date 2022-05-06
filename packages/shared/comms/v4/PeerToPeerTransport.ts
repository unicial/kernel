import { Transport, TransportMessage } from './Transport'
import { LighthouseWorldInstanceConnection } from '../v2/LighthouseWorldInstanceConnection'
import { Observable } from 'mz-observable'

export class PeerToPeerTransport extends LighthouseWorldInstanceConnection implements Transport {
  public onDisconnectObservable = new Observable<void>()
  public onMessageObservable = new Observable<TransportMessage>()
  public async send(): Promise<void> {}
  public async sendIdentity(): Promise<void> {}
}
