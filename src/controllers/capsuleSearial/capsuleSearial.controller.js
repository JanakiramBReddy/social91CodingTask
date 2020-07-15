import axios from 'axios'

const capsuleSearialApi = (capsuleSearial) => {
  
    try {
      const data = axios.get(`https://api.spacexdata.com/v3/capsules/${capsuleSearial}`)
      return data
    } catch (error) {
      throw error
    }
  
  }

  export default capsuleSearialApi