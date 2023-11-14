import React from 'react';
import { Row, Col, Input, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { requestResetPassword } from '../redux/actions/userActions';
import Spinner from '../components/Spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function ForgotPassword() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.alertsReducer);

  function onFinish(values) {
    dispatch(requestResetPassword(values));
  }

  return (
    <div className='login' style={{ backgroundColor: '#fafafa' }}>

      <div style={{ margin: '15px 0px 15px 15px', display: 'flex' }}>
        <a href='javascript:history.back()'>Go Back</a>
      </div>

      <div style={{ margin: 'auto', background: 'aliceblue', padding: '20px', width: 'fit-content', borderRadius: '25px' }}>

        {loading && <Spinner />}
        <Row gutter={16} className='d-flex aligin-items-center' style={{ justifyContent: 'center' }}>

          <Col
            lg={20} md={20} sm={20} style={{ width: '' }}
            className='text-left p-5'
          >
            <Form
              layout='vertical'
              className='login-form p-5'
              onFinish={onFinish}
            >
              <h1>Reset Password</h1>
              <h3>Enter your Email for request a reset link</h3>
              <hr />
              <Form.Item name='email' label='Email' rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <button style={{ marginBottom: '15px' }} className='btn1 mt-2 mb-3'>
                Submit
              </button>
              <br />
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ForgotPassword;
