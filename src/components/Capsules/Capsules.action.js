
import {CAPSULES_DATA,
    CAPSULES_DATA_SUCCESS,
    CAPSULES_DATA_FAILURE,
    CAPSULES_SEARIAL_DATA,
    CAPSULES_SEARIAL_DATA_SUCCESS,
    CAPSULES_SEARIAL_DATA_FAILURE } from './Capsules.type';

export const capsulesData = (data) => {
    return {
      type: CAPSULES_DATA,
      payload: data,
    }
  }
  
  export const capsulesSuccessData = (newSystemState) => {
    return {
      type: CAPSULES_DATA_SUCCESS,
      payload: newSystemState,
    }
  }
  
  export const capsulesFailureData = (newSystemState) => {
    return {
      type: CAPSULES_DATA_FAILURE,
      payload: newSystemState,
    }
  }

  export const capsulesSearialData = (data) => {
    return {
      type: CAPSULES_SEARIAL_DATA,
      payload: data,
    }
  }
  
  export const capsulesSearialSuccessData = (newSystemState) => {
    return {
      type: CAPSULES_SEARIAL_DATA_SUCCESS,
      payload: newSystemState,
    }
  }
  
  export const capsulesSearialFailureData = (newSystemState) => {
    return {
      type: CAPSULES_SEARIAL_DATA_FAILURE,
      payload: newSystemState,
    }
  }

  