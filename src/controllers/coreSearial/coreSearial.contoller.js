import axios from 'axios'

const coreSearialApi = (coreSearial) => {
  
    try {
      const serialData = axios.get(`https://api.spacexdata.com/v3/cores/${coreSearial}`)
      return serialData
    } catch (error) {
      throw error
    }
  
  }

  export default coreSearialApi