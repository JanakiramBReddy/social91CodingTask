
const initialLoginState = {
  isAuthenticated: false,
}

export const loginReducer = (state = initialLoginState,action) => {
  switch (action.type) {
    case "APP_LOGIN_SUCCESS":
      return {...state, ...action.payload ,isAuthenticated :true}
    case "APP_LOGIN_FAILURE":
      return {...state, ...{errorMessage: action.payload}}
    default:
      return state
  }
}
