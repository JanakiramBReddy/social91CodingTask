import {combineReducers} from 'redux'
import {loginReducer} from '../containers/LoginCard/LoginCard.reducer'
import {capsuleReducer} from '../components/Capsules/Capsules.reducer'
import {coreReducer} from '../components/Cores/Cores.reducer'

const appReducer = combineReducers({
    login: loginReducer,
    capsule:capsuleReducer,
    core:coreReducer
})

export const rootReducer = (state, action) => {
  if (action.type === 'APP_LOGOUT') {
    state = {}
  }
   return appReducer(state, action)
}

export default rootReducer
