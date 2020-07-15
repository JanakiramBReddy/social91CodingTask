import React from 'react'
import {useSelector} from 'react-redux'
import AuthenticatedApp from './components/AuthenticatedApp/AuthenticatedApp'
import UnAuthenticatedApp from './components/UnAuthenticatedApp/UnAuthenticatedApp'

const Home = () => {
  const isAuth = useSelector((state) => state.login.isAuthenticated)

  return isAuth ? <AuthenticatedApp /> : <UnAuthenticatedApp />
}

export default Home
