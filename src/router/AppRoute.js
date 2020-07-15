import React from 'react'
import {Switch,Route} from 'react-router-dom'
import CapsuleSerial from '../components/Capsules/Capsule.serial'
import CoreSerial from '../components/Cores/Core.serial'


const AppRouter = () => {
  return (
    <Switch>
        {/* <Route path='' component={Capsules} /> */}
        <Route exact path='/capsuledetails/:capsuleId' component={CapsuleSerial} />
        <Route exact path='/coredetails/:coreId' component={CoreSerial} />
    </Switch>
  )
}

export default AppRouter
