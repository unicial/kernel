import { Avatar } from '@dcl/schemas'
import { call, select, takeLatest } from 'redux-saga/effects'
import { realmToConnectionString } from 'shared/dao/utils/realmToString'
import { getProfile } from 'shared/profiles/selectors'
import { toEnvironmentRealmType } from '../apis/EnvironmentAPI'
import { SET_COMMS_ISLAND, SET_WORLD_CONTEXT } from '../comms/actions'
import { getCommsIsland, getRealm } from '../comms/selectors'
import { Realm } from '../dao/types'
import { SendProfileToRenderer, SEND_PROFILE_TO_RENDERER } from '../profiles/actions'
import { takeLatestByUserId } from '../profiles/sagas'
import { allScenesEvent } from '../world/parcelSceneManager'

export function* sceneEventsSaga() {
  yield takeLatest([SET_COMMS_ISLAND, SET_WORLD_CONTEXT], islandChanged)
  yield takeLatestByUserId(SEND_PROFILE_TO_RENDERER, submitProfileToScenes)
}

function* islandChanged() {
  const realm: Realm = yield select(getRealm)
  const island: string | undefined = yield select(getCommsIsland)

  if (!realm) {
    return
  }

  const payload = toEnvironmentRealmType(realm, island)
  yield call(allScenesEvent, { eventType: 'onRealmChanged', payload })

  const realmString = realmToConnectionString(realm)
  yield call(updateLocation, realmString, island)
}

// @internal
export function updateLocation(realm: string | undefined, island: string | undefined) {
  const q = new URLSearchParams(window.location.search)
  if (realm) q.set('realm', realm)
  else q.delete('realm')
  if (island) {
    q.set('island', island)
  } else {
    q.delete('island')
  }

  history.replaceState({ island, realm }, '', `?${q.toString()}`)
}

function* submitProfileToScenes(action: SendProfileToRenderer) {
  // TODO: are all profile changes supposed to go to the scene????
  //       this function sends all of them
  const profile: Avatar | null = yield select(getProfile, action.payload.userId)
  if (profile) {
    yield call(allScenesEvent, {
      eventType: 'profileChanged',
      payload: {
        ethAddress: profile.ethAddress,
        version: profile.version
      }
    })
  }
}
