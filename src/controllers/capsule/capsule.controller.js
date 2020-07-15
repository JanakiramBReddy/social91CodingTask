import axios from 'axios'

export const capsuleApi = (capsuleCred) => {
  
    try {
      const data = axios.get(`https://api.spacexdata.com/v3/capsules?limit=5`)
      return data
    } catch (error) {
      throw error
    }
  
  }

  export default capsuleApi

