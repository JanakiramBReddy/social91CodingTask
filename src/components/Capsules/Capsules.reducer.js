
const initialLoginState = {
    capsuleSearialData : {}
  }
  
  export const capsuleReducer = (state = initialLoginState,action) => {
    switch (action.type) {
      case "CAPSULES_DATA_SUCCESS":
        return {...state, ...action.payload }
      case "CAPSULES_DATA_FAILURE":
        return {...state, ...{errorMessage: action.payload}}
        case "CAPSULES_SEARIAL_DATA_SUCCESS":
            return {...state, capsuleSearialData : action.payload }
          case "CAPSULES_SEARIAL_DATA_FAILURE":
            return {...state, ...{errorMessage: action.payload}}
      default:
        return state
    }
  }
  