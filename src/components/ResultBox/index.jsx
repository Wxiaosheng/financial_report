import React, { Component } from 'react'

import './style.css'

export default class ResultBox extends Component {
  render () {
    const { content } = this.props
    return <div className='result_box'>
      <pre className='result_box' >{ content ? content : '请点击转换按钮得到结果' }</pre>
    </div>
  }
}