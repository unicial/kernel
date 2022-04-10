import { RootDaoState } from './types'
import {
  COMMS_SERVICE,
  FETCH_CONTENT_SERVICE,
  getServerConfigurations,
  HOTSCENES_SERVICE,
  PIN_CATALYST,
  POI_SERVICE,
  RESIZE_SERVICE,
  UPDATE_CONTENT_SERVICE
} from 'config'
import { RootMetaState } from 'shared/meta/types'
import { getContentWhitelist } from 'shared/meta/selectors'

function urlWithProtocol(url: string) {
  function normalizeUrl(url: string) {
    return url.replace(/^:\/\//, globalThis.location.protocol + '//')
  }

  if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('://'))
    return normalizeUrl(`://${url}`)

  return normalizeUrl(url)
}

function getAllowedContentServer(givenServer: string, meta: RootMetaState): string {
  // if a catalyst is pinned => avoid any override
  if (PIN_CATALYST) {
    return urlWithProtocol(PIN_CATALYST + '/content')
  }

  const contentWhitelist = getContentWhitelist(meta)

  // if current realm is in whitelist => return current state
  if (contentWhitelist.some((allowedCandidate) => allowedCandidate === givenServer)) {
    return urlWithProtocol(givenServer)
  }

  if (contentWhitelist.length) {
    return urlWithProtocol(contentWhitelist[0] + '/content')
  }

  return urlWithProtocol(givenServer)
}

export const getUpdateProfileServer = (state: RootDaoState & RootMetaState) => {
  if (UPDATE_CONTENT_SERVICE) {
    return urlWithProtocol(UPDATE_CONTENT_SERVICE)
  }
  // if a catalyst is pinned => avoid any override
  if (PIN_CATALYST) {
    return urlWithProtocol(PIN_CATALYST + '/content')
  }
  return urlWithProtocol(state.dao.updateContentServer)
}

export const getFetchContentServer = (state: RootDaoState & RootMetaState) => {
  if (FETCH_CONTENT_SERVICE) {
    return urlWithProtocol(FETCH_CONTENT_SERVICE)
  }
  return getAllowedContentServer(state.dao.fetchContentServer, state)
}

export const getCatalystServer = (store: RootDaoState) => urlWithProtocol(store.dao.catalystServer)

export const getResizeService = (store: RootDaoState) => {
  if (RESIZE_SERVICE) {
    return RESIZE_SERVICE
  }
  return urlWithProtocol(store.dao.resizeService)
}

export const getCommsServer = (domain: string) => {
  if (COMMS_SERVICE) {
    return urlWithProtocol(COMMS_SERVICE)
  }

  return urlWithProtocol(domain + '/comms')
}

export const getCatalystCandidates = (store: RootDaoState) => store.dao.candidates
export const getAddedCatalystCandidates = (store: RootDaoState) => store.dao.addedCandidates

export const getAllCatalystCandidates = (store: RootDaoState) =>
  getAddedCatalystCandidates(store)
    .concat(getCatalystCandidates(store))
    .filter((it) => !!it)

export const areCandidatesFetched = (store: RootDaoState) => store.dao.candidatesFetched

export const getHotScenesService = (store: RootDaoState) => {
  if (HOTSCENES_SERVICE) {
    return HOTSCENES_SERVICE
  }
  return urlWithProtocol(store.dao.hotScenesService)
}

export const getExploreRealmsService = (store: RootDaoState) => store.dao.exploreRealmsService
export const getPOIService = (store: RootDaoState) => {
  if (POI_SERVICE) {
    return POI_SERVICE
  }
  return urlWithProtocol(store.dao.poiService)
}

export const getSelectedNetwork = (store: RootDaoState) => {
  if (store.dao.network) {
    return store.dao.network
  }
  throw new Error('Missing network')
}

export const isResizeServiceUrl = (store: RootDaoState, url: string | undefined) =>
  url?.startsWith(getResizeService(store)) ||
  url?.startsWith(getServerConfigurations(getSelectedNetwork(store)).fallbackResizeServiceUrl)
