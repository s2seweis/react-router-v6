import React from 'react';
import { Row, Col, Input, Form } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../redux/actions/userActions';
import Spinner from '../components/Spinner';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Register() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.alertsReducer);

  function onFinish(values) {
    dispatch(userRegister(values));
  }

  return (
    <div className='login' style={{ margin: 'auto', padding: '20px', minWidth:'350px' }}>
      {loading && <Spinner />}
      <Row
        gutter={16}
        className='d-flex aligin-items-center'
        style={{ justifyContent: 'center', background: 'aliceblue', padding: '50px' }}
      >
        <Col
          lg={6} md={10} sm={10} style={{ minWidth:'100%'}} className='text-left p-5'>
          <Form
            layout='vertical'
            className='login-form p-5'
            onFinish={onFinish}
            style={{ width: '100%' }}
          >
            <h1>Register</h1>
            <hr />
            <Form.Item
              name='username'
              label='Username'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='email'
              label='Email'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='password'
              label='Password'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='cpassword'
              label='Confirm Password'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <button style={{ marginBottom: '15px' }} className='btn1 mt-2 mb-3'>Register</button>
            <br />
            <Link to='/login'>Click here to Login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
