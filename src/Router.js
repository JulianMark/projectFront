import React from "react"
import { HashRouter, Switch, Route } from "react-router-dom"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Home from "./Home"

const Router = () => (
  <HashRouter> 
    <Switch>
      <Route path="/" component={SignIn} exact />
      <Route path="/SignUp" component={SignUp} exact />
      <Route path="/Home/:userId" component={Home} exact />
    </Switch>
  </HashRouter>
)

export default Router;