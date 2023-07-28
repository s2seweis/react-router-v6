import React from 'react';

import {Row, Col, Form, Input} from 'antd';

import 'antd/dist/antd.min.css';


const Login = () => {
  return (
    <div className="login">

      <Row gutter={16}>

        <Col lg={8} />
        <Col lg={8} className='text-left' >
          <Form style={{marginTop:"100px"}} layout="vertical">

            <h1>Login</h1>
            <hr></hr>
            <br></br>

            <Form.Item
              name="username"
              label="Username"
              rules={[{required: true}]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{required: true}]}
            >
              <Input />
            </Form.Item>

            <button className='btn1'>Login</button>

          </Form>
        </Col>

      </Row>

    </div>
  );
};

export default Login;
