
import {CORES_DATA,
    CORES_DATA_SUCCESS,
    CORES_DATA_FAILURE,
    CORES_SEARIAL_DATA,
    CORES_SEARIAL_DATA_SUCCESS,
    CORES_SEARIAL_DATA_FAILURE } from './Cores.type';

export const coresData = (data) => {
    return {
      type: CORES_DATA,
      payload: data,
    }
  }
  
  export const coresSuccessData = (newSystemState) => {
    return {
      type: CORES_DATA_SUCCESS,
      payload: newSystemState,
    }
  }
  
  export const coresFailureData = (newSystemState) => {
    return {
      type: CORES_DATA_FAILURE,
      payload: newSystemState,
    }
  }

  export const coresSearialData = (data) => {
    return {
      type: CORES_SEARIAL_DATA,
      payload: data,
    }
  }
  
  export const coresSearialSuccessData = (newSystemState) => {
    return {
      type: CORES_SEARIAL_DATA_SUCCESS,
      payload: newSystemState,
    }
  }
  
  export const coresSearialFailureData = (newSystemState) => {
    return {
      type: CORES_SEARIAL_DATA_FAILURE,
      payload: newSystemState,
    }
  }

  