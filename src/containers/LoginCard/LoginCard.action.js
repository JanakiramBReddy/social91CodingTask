
import {APP_LOGIN,
    APP_LOGIN_SUCCESS,
    APP_LOGIN_FAILURE,APP_LOGOUT } from './LoginCard.type';

export const login = (loginCred) => {
    return {
      type: APP_LOGIN,
      payload: loginCred,
    }
  }
  
  export const loginSuccess = (newSystemState) => {
    return {
      type: APP_LOGIN_SUCCESS,
      payload: newSystemState,
    }
  }
  
  export const loginError = (newSystemState) => {
    return {
      type: APP_LOGIN_FAILURE,
      payload: newSystemState,
    }
  }

  export const logout = () => {
    return {
      type: APP_LOGOUT,
      payload: {},
    }
  }
  