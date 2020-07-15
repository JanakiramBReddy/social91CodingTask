import axios from 'axios'

const login = (loginCred) => {
  if(loginCred.email == 'capsules@gmail.com'){
    try {
      const data = axios.post(`https://run.mocky.io/v3/1967fc70-6154-441e-8ac2-c89c61dae791`, loginCred)
      return data
    } catch (error) {
      throw error
    }
  }else{
    try {
      const data = axios.post(`https://run.mocky.io/v3/fa8f16f3-fedf-40c7-8d30-10b8f32b3a7e`, loginCred)
      return data
    } catch (error) {
      throw error
    }
  }
  }

  export default login