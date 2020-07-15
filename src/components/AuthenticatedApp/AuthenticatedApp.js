import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Capsules from '../Capsules/Capsules.component'
import Cores from '../Cores/Cores.component'
import AppBar from '../Header/AppBar'
import AppRouter from '../../router/AppRoute'

const AuthenticatedApp = () => {
  const userCapsulesRole = useSelector((state) =>state.login.data.identify.login)
  const AuthRoute = () => {
    if(userCapsulesRole == "capsules"){
      return <Capsules />
    }else{
      return <Cores />
    }
  }
  return (
    <BrowserRouter>
        <AppBar />
        <AuthRoute />
        <AppRouter />
    </BrowserRouter>
  )
}

export default AuthenticatedApp