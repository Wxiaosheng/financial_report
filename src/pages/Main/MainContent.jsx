import React, { Component } from 'react'
import { Layout } from 'antd'
import Router from 'router/'

const { Content } = Layout

export default class MainContent extends Component {
  render () {
    return <Content className='main_content'>
      <Router />
    </Content>   
  }
}