import React, {  Component } from 'react'
import { HashRouter, Switch } from "react-router-dom"
import { Layout } from 'antd'
import MainContent from './MainContent'
import MainSider from './MainSider'

import './style.css'

const { Header } = Layout

export default class Main extends Component {
  render () {
    return <div className='page_main' >
      <HashRouter>
        <Switch>
            <Layout>
            <Header className='page_main_header'>财报数据管理后台</Header>
            <Layout>
              <MainSider />
              <Layout style={{ padding: '24px' }}>
                <MainContent />
              </Layout>
            </Layout>
          </Layout>
        </Switch>
      </HashRouter>
    </div>
  }
}