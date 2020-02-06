import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"

import Home from 'pages/Home/'
import DataHandleName from 'pages/DataHandle/Name'

export default class Routers extends Component {
  render () {
    return <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/data_handle/name' component={DataHandleName} />
      <Redirect to='/' />
    </div>
  }
}