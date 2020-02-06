import React, { Component } from 'react'
import { Col, Form, Input, Button, message } from 'antd'
import ResultBox from 'components/ResultBox/'

import './style.css'

const { TextArea } = Input;

class DataHandleName extends Component {
  constructor (props) {
    super(props)

    this.state ={
      result: ''
    }

    this.chengeData = this.chengeData.bind(this)
  }

  // 转换按钮
  chengeData () {
    this.props.form.validateFieldsAndScroll((err, values) => {
      const { dataName } = values

      const result = this.formatName(dataName)
      console.log(result)

      this.setState({ result: result.join('\n') })
    })
  }

  // 格式化姓名
  formatName (sting) {
    if (!sting) {
      return  message.warning('请输入要转换的内容！ ')
    }

    return sting.split('\n').map(name => {
      const result = name.split(/\-|\一|\–|\_|－|—/g)
      return result[result.length - 1]
    })
  }

  render () {
    const { result } = this.state
    const { getFieldDecorator } = this.props.form

    return <div className='data_handle_name' >
      <div className='page_title' >姓名格式化</div>
      <Col span={ 8 }>
        <Form>
          <Form.Item label='模板名称'>
            { getFieldDecorator('dataName', {})(<TextArea rows={20} />) }
          </Form.Item>
        </Form>
      </Col>
      <Col span={ 2 } />
      <Col span={ 4 }>
        <Button type='primary' block onClick={this.chengeData}>转换</Button>
        </Col>
      <Col span={ 2 }/>
      <Col span={ 8 } style={{ height: '90%' }}>
        <ResultBox content={result} />
      </Col>
    </div>
  }
}

export default Form.create()(DataHandleName)