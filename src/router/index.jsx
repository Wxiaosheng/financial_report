import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"

import Home from 'pages/Home/'
import DataHandleName from 'pages/DataHandle/Name'

export default class Routers extends Component {
  render () {
    return <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/data_handle/name' component={DataHandleName} />
      <Redirect to='/' />
    </Switch>
  }
}