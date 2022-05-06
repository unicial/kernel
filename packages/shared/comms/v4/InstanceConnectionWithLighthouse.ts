import { Avatar } from '@dcl/schemas'
import { Position } from '../interface/utils'
import { InstanceConnection } from './InstanceConnection'
import { ProfileType } from '../../../shared/profiles/types'
import { EncodedFrame } from '../../../../packages/voice-chat-codec/types'
import { Transport, TransportMessage } from './Transport'
import { PeerToPeerTransport } from './PeerToPeerTransport'
import { BFFConnection, TopicData } from './BFFConnection'
import { LighthouseConnectionConfig } from '../v2/LighthouseWorldInstanceConnection'
import { CommsStatus } from '../types'

export class InstanceConnectionWithLighthouse extends InstanceConnection {
  private topics: string[] = []

  constructor(
    bff: BFFConnection,
    private lighthouseUrl: string,
    private peerConfig: LighthouseConnectionConfig,
    private statusHandler: (status: CommsStatus) => void
  ) {
    super(bff)
  }

  async disconnect(): Promise<void> {
    await super.disconnect()
  }

  async connect(): Promise<void> {
    await super.connect()
  }

  async sendInitialMessage(address: string, profileType: ProfileType): Promise<void> {
    if (this.transport instanceof PeerToPeerTransport) {
      await this.transport.sendInitialMessage(address, profileType)
      return
    }
    await super.sendInitialMessage(address, profileType)
  }

  async sendProfileMessage(
    currentPosition: Position,
    address: string,
    profileType: ProfileType,
    version: number
  ): Promise<void> {
    if (this.transport instanceof PeerToPeerTransport) {
      await this.transport.sendProfileMessage(currentPosition, address, profileType, version)
      return
    }
    await super.sendProfileMessage(currentPosition, address, profileType, version)
  }

  async sendProfileRequest(currentPosition: Position, userId: string, version: number | undefined): Promise<void> {
    if (this.transport instanceof PeerToPeerTransport) {
      await this.transport.sendProfileRequest(currentPosition, userId, version)
      return
    }
    await super.sendProfileRequest(currentPosition, userId, version)
  }

  async sendProfileResponse(currentPosition: Position, profile: Avatar): Promise<void> {
    if (this.transport instanceof PeerToPeerTransport) {
      await this.transport.sendProfileResponse(currentPosition, profile)
      return
    }
    await super.sendProfileResponse(currentPosition, profile)
  }

  async sendPositionMessage(p: Position): Promise<void> {
    if (this.transport instanceof PeerToPeerTransport) {
      await this.transport.sendPositionMessage(p)
      return
    }
    await super.sendPositionMessage(p)
  }

  async sendParcelUpdateMessage(currentPosition: Position, p: Position): Promise<void> {
    if (this.transport instanceof PeerToPeerTransport) {
      await this.transport.sendParcelUpdateMessage(currentPosition, p)
      return
    }
    await super.sendParcelUpdateMessage(currentPosition, p)
  }

  async sendParcelSceneCommsMessage(cid: string, message: string): Promise<void> {
    if (this.transport instanceof PeerToPeerTransport) {
      await this.transport.sendParcelSceneCommsMessage(cid, message)
      return
    }
    await super.sendParcelSceneCommsMessage(cid, message)
  }

  async sendChatMessage(currentPosition: Position, messageId: string, text: string): Promise<void> {
    if (this.transport instanceof PeerToPeerTransport) {
      await this.transport.sendChatMessage(currentPosition, messageId, text)
      return
    }
    await super.sendChatMessage(currentPosition, messageId, text)
  }

  async sendVoiceMessage(currentPosition: Position, frame: EncodedFrame): Promise<void> {
    if (this.transport instanceof PeerToPeerTransport) {
      await this.transport.sendVoiceMessage(currentPosition, frame)
      return
    }
    await super.sendVoiceMessage(currentPosition, frame)
  }

  async setTopics(topics: string[]): Promise<void> {
    this.topics = topics
    if (this.transport instanceof PeerToPeerTransport) {
      await this.transport.setTopics(topics)
      return
    }
    await super.setTopics(topics)
  }

  protected async changeTransport(transport: Transport) {
    await super.changeTransport(transport)
    if (transport instanceof PeerToPeerTransport) {
      transport.events.on('initialMessage', (message) => this.events.emit('initialMessage', message))
      transport.events.on('sceneMessageBus', (message) => this.events.emit('sceneMessageBus', message))
      transport.events.on('chatMessage', (message) => this.events.emit('chatMessage', message))
      transport.events.on('profileMessage', (message) => this.events.emit('profileMessage', message))
      transport.events.on('position', (message) => this.events.emit('position', message))
      transport.events.on('voiceMessage', (message) => this.events.emit('voiceMessage', message))
      transport.events.on('profileResponse', (message) => this.events.emit('profileResponse', message))
      transport.events.on('profileRequest', (message) => this.events.emit('profileRequest', message))
      transport.events.on('DISCONNECTION', () => this.events.emit('DISCONNECTION'))

      await transport.setTopics(this.topics)
    }
  }

  protected handleTopicMessage(message: TopicData) {
    if (this.transport instanceof PeerToPeerTransport) {
      return
    }
    super.handleTopicMessage(message)
  }

  protected handleTransportMessage(message: TransportMessage) {
    if (this.transport instanceof PeerToPeerTransport) {
      return
    }
    super.handleTransportMessage(message)
  }

  protected createTransport(_islandConnStr: string): Transport | null {
    // TODO
    // let transport = super.createTransport(islandConnStr)
    // if (!transport && islandConnStr.startsWith('p2p:')) {
    //   const lighthouseUrl = 'http://localhost:9000' || this.lighthouseUrl
    //   transport = new PeerToPeerTransport(lighthouseUrl, this.peerConfig, this.statusHandler)
    // }
    const lighthouseUrl = 'http://localhost:9000' || this.lighthouseUrl
    return new PeerToPeerTransport(lighthouseUrl, this.peerConfig, this.statusHandler)
  }
}
