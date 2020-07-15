
import {call, put, takeLatest} from 'redux-saga/effects'
import {CORES_DATA,CORES_SEARIAL_DATA} from './Cores.type'
import coreApi from '../../controllers/cores/core.contoller'
import coreSearialApi from '../../controllers/coreSearial/coreSearial.contoller'
import {coresSuccessData, coresFailureData,coresSearialSuccessData,coresSearialFailureData} from './Cores.action'

function* coreResult(action) {
  try {
    const cores = yield call(coreApi, action.payload)
    yield put(coresSuccessData(cores))
  } catch (error) {
    yield put(coresFailureData(error.message))
  }
}

function* coreSearialResult(action) {
    try {
      const coreSearial = yield call(coreSearialApi, action.payload)
      yield put(coresSearialSuccessData(coreSearial))
    } catch (error) {
      yield put(coresSearialFailureData(error.message))
    }
  }

function* coreResultSaga() {
  yield takeLatest(CORES_DATA, coreResult)
  yield takeLatest(CORES_SEARIAL_DATA, coreSearialResult)
}

export default coreResultSaga
