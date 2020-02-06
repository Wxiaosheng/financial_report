import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'


const { SubMenu } = Menu
const { Sider } = Layout

export default class MainSider extends Component {
  render () {
    return <Sider className='page_main_sider'>
    <Menu
      mode='inline'
      defaultSelectedKeys={['name']}
      defaultOpenKeys={['data_handle']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <SubMenu
        key='data_handle'
        title={ <span><Icon type='laptop' />数据处理</span> }
      >
        <Menu.Item key='name'>
          <Link to='/data_handle/name' >姓名处理</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  </Sider>
  }
}