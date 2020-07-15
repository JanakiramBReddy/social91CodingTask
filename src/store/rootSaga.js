import {all, spawn, call} from 'redux-saga/effects'
import loginCardSaga from '../containers/LoginCard/LoginCard.saga'
import capsuleResultSaga from '../components/Capsules/Capsules.saga'
import coreResultSaga from '../components/Cores/Cores.saga'

export function* rootSaga() {
  const sagas = [
    loginCardSaga,
    capsuleResultSaga,
    coreResultSaga
  ]

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
