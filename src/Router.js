import React from "react"
import { HashRouter, Switch, Route } from "react-router-dom"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

const Router = () => (
  <HashRouter> /
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/SignUp" component={SignUp} exact />
    </Switch>
  </HashRouter>
)

export default Router;