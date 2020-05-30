import React, { Component } from 'react'
import { Table, Space, Button, Modal, Input, Form } from 'antd';
import { connect } from 'dva'
import './style.less'

export default @connect(state => {
  return { home: state.home }
})


class Home extends Component {
  state = {
    visible: false,
    title: '添加',
    user: {
      name: '1',
      age: '1',
      msg: '1'
    }
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'home/getData'
    })
  }

  onFinish = values => {
    this.handleOk();
    if(this.state.title === '添加'){
      this.props.dispatch({
        type: 'home/addData',
        payload: values
      })
    }else {
      this.props.dispatch({
        type: 'home/editData',
        payload: { ...values, id: this.props.home.user.id}
      })
    }
    
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  deleteFn = (val) => {
    this.props.dispatch({
      type: 'home/deleteData',
      payload: { id: val.id}
    })
  }
  
  editFn = (val) => {
    this.setState({
      visible: true,
      title:  '编辑',
    });
    this.props.dispatch({
      type: 'home/updateData',
      payload: val
    })
  }

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'msg',
        key: 'msg',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button type='primary' onClick={() => this.editFn(text)}>编辑</Button>
            <Button type="danger" onClick={() => this.deleteFn(text)}>删除</Button>
          </Space>
        ),
      },
    ];
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };
    const { data } = this.props.home;
    const { title } = this.state;
    return (
      <div>
        <div>
          <Button type="primary" onClick={this.showModal}>
            添加
          </Button>
          <Modal
            title={title}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            destroyOnClose={true}
          >
            <Form
              {...layout}
              name="basic"
              initialValues={{...this.props.home.user}}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed} 
            >
              <Form.Item
                label="姓名"
                name="name"
                rules={[
                  {
                    required: true,
                    message: '请输入姓名!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="年龄"
                name="age"
                rules={[
                  {
                    required: true,
                    message: '请输入年龄!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="地址"
                name="msg"
                rules={[
                  {
                    required: true,
                    message: '请输入地址!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  确定
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <Table columns={columns} dataSource={data} rowKey={v => v.id} />
      </div>
    )
  }
}
