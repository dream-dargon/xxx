
import React, { Component } from 'react'
import {} from 'antd'
import './App.css';
export default class App extends Component {
  render() {
    return (
      <div>
      <List>
      <Picker extra="省、市、区"
         data={city}  
         {...getFieldProps('adresscz', {
          initialValue: this.state.adresscz,
           rules: [
           { required: true, message: '请选择'},
          ],
            })}
           error={!!getFieldError('adresscz')}
           onOk={this.Adresszc}
            >
          <List.Item arrow="horizontal">现住址</List.Item>
      </Picker>
     </List>
      </div>
    )
  }
}


