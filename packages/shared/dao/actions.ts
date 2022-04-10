import { ETHEREUM_NETWORK } from 'config'
import { action } from 'typesafe-actions'
import { Candidate } from './types'

export const WEB3_INITIALIZED = 'Web3 initialized'

export const UPDATE_CATALYST_REALM = 'Update Catalyst Realm'

export const SET_CATALYST_CANDIDATES = 'Set Catalyst Candidates'
export const setCatalystCandidates = (candidates: Candidate[]) => action(SET_CATALYST_CANDIDATES, candidates)
export type SetCatalystCandidates = ReturnType<typeof setCatalystCandidates>

export const SELECT_NETWORK = '[DAO] Select network'
export const selectNetwork = (network: ETHEREUM_NETWORK) => action(SELECT_NETWORK, network)
export type SelectNetworkAction = ReturnType<typeof selectNetwork>

export const SET_ADDED_CATALYST_CANDIDATES = 'Set Added Catalyst Candidates'
export const setAddedCatalystCandidates = (candidates: Candidate[]) => action(SET_ADDED_CATALYST_CANDIDATES, candidates)
export type SetAddedCatalystCandidates = ReturnType<typeof setAddedCatalystCandidates>

export const CATALYST_REALMS_SCAN_REQUESTED = '[Request] Catalyst Realms scan'
export const catalystRealmsScanRequested = () => action(CATALYST_REALMS_SCAN_REQUESTED)
export type CatalystRealmsScanRequested = ReturnType<typeof catalystRealmsScanRequested>

export const TRIGGER_RECONNECT_REALM = '[DAO] Trigger reconnect realm'
export const triggerReconnectRealm = () => action(TRIGGER_RECONNECT_REALM)
export type RriggerReconnectRealm = ReturnType<typeof triggerReconnectRealm>
