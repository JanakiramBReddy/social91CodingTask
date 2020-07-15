import axios from 'axios'

export const coreApi = (coreCred) => {
  
    try {
      const data = axios.get(`https://api.spacexdata.com/v3/cores?limit=10`)
      return data
    } catch (error) {
      throw error
    }
  
  }

  export default coreApi

