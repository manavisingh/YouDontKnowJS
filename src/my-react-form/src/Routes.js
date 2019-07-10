import React from "react"
import { Route } from "react-router-dom"
import VerifyUser from './Component'

const Routes = () => {
  return (
    <div>
        <Route path="/verifyUser" component={VerifyUser} />
    </div>
  )
}

export default Routes