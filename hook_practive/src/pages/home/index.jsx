import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Modal, Form, Input } from 'antd';
import { getList, updateList } from '@/actions/home'
import './style.less'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function Home (props) {
  const { getList, updateList } = props
  const { list } = props.home
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    getList()
    // post(api.userList).then(res => console.log(res,111))
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '密码',
      dataIndex: 'msg',
      key: 'msg',
    },
    {
      title: '权限',
      key: 'gender',
      dataIndex: 'gender'
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type='primary' onClick={() =>editShow(text)}>edit</Button>
          <Button type='danger'>Delete</Button>
        </span>
      ),
    },
  ];

  const editShow = (val) => {
    setVisible(true);
    localStorage.setItem('id',val.id)
    form.setFieldsValue({
      name: val.name,
      msg: val.msg,
      gender: val.gender,
    });
  }

  const showModal = () => {
    setVisible(true)
  };

  const handleOk = e => {
    setVisible(false)
  };

  const handleCancel = e => {
    setVisible(false)
  };

  const onFinish = values => {
    setVisible(false)
    updateList({...values,id: localStorage.getItem('id')})
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="pages-home">
    <Modal
      title="修改"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
        <Form 
          {...formItemLayout} 
          name="basic"
          form = {form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="name"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="msg"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="权限"
            name="gender"
            rules={[
              {
                required: true,
                message: '请输入权限!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              确认
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={list} rowKey={v => v.id} />
    </div>
  )
}

export default connect(state => {
  return { home: state.home }
},{
  getList,
  updateList
})(Home)
