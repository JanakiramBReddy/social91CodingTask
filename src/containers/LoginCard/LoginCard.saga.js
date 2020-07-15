
import {call, put, takeLatest} from 'redux-saga/effects'
import {APP_LOGIN} from './LoginCard.type'
import login from '../../controllers/login/login.controller'
import {loginSuccess, loginError} from './LoginCard.action'

function* loginUser(action) {
  try {
    const user = yield call(login, action.payload)
    yield put(loginSuccess(user))
  } catch (error) {
    yield put(loginError(error.message))
  }
}

function* loginCardSaga() {
  yield takeLatest(APP_LOGIN, loginUser)
}

export default loginCardSaga
