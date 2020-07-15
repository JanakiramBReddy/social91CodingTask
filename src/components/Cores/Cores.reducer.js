
const initialLoginState = {
    coreSearialData : {},
  }
  
  export const coreReducer = (state = initialLoginState,action) => {
    switch (action.type) {
      case "CORES_DATA_SUCCESS":
        return {...state, ...action.payload }
      case "CORES_DATA_FAILURE":
        return {...state, ...{errorMessage: action.payload}}
        case "CORES_SEARIAL_DATA_SUCCESS":
            return {...state, coreSearialData : action.payload }
          case "CORES_SEARIAL_DATA_FAILURE":
            return {...state, ...{errorMessage: action.payload}}
      default:
        return state
    }
  }
  