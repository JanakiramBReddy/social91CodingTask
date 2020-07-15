
import {call, put, takeLatest} from 'redux-saga/effects'
import {CAPSULES_DATA,CAPSULES_SEARIAL_DATA} from './Capsules.type'
import capsuleApi from '../../controllers/capsule/capsule.controller'
import capsuleSearialApi from '../../controllers/capsuleSearial/capsuleSearial.controller'
import {capsulesSuccessData, capsulesFailureData,capsulesSearialSuccessData,capsulesSearialFailureData} from './Capsules.action'

function* capsuleResult(action) {
  try {
    const capsule = yield call(capsuleApi, action.payload)
    yield put(capsulesSuccessData(capsule))
  } catch (error) {
    yield put(capsulesFailureData(error.message))
  }
}

function* capsuleSearialResult(action) {
    try {
      const capsuleSearial = yield call(capsuleSearialApi, action.payload)
      yield put(capsulesSearialSuccessData(capsuleSearial))
    } catch (error) {
      yield put(capsulesSearialFailureData(error.message))
    }
  }

function* capsuleResultSaga() {
  yield takeLatest(CAPSULES_DATA, capsuleResult)
  yield takeLatest(CAPSULES_SEARIAL_DATA, capsuleSearialResult)
}

export default capsuleResultSaga
